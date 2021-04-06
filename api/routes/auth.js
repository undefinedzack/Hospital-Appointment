const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {registerValidation, loginValidation} = require('../validation')


router.post('/register', async (req, res) => {
    //Validate User
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Check if user already exists
    const emailExists = 
      await User.findOne({email: req.body.email})
    if (emailExists) return res.status(400).send('Email already exists')

    //Hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    try{
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body)

    //Validate User
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Check if user already exists
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('Email does not exist!')

    //Password Check
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Password incorrect!')

    //Create and assign a token
    const token = await jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)

})

module.exports = router
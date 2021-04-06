const router = require('express').Router()
const verify = require('./routes/private')

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'you should not see this'
        }
    })
})


module.exports = router
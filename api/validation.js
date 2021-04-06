//Validation
const Joi = require('joi')

//Register Validation
const registerValidation = (data) => {
    const userValidationSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
    })
    return userValidationSchema.validate(data)
}

//Login Validation
const loginValidation = (data) => {
    const userValidationSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
    })
    return userValidationSchema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation

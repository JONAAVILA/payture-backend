import Joi from "joi"

export const schema = Joi.object({
    name:Joi.string()
        .min(3)
        .required(),
    password: 
        Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
        .required()
})
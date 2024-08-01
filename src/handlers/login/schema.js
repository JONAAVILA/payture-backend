import Joi from "joi"

export const schema = {
    name:Joi.string().min(3).required()
}
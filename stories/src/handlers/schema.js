import Joi from "joi"

export const schema = Joi.object({
    uuid:Joi.string()
        .uuid(),
    name:Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z .-_]+$')),
    userName:Joi.string()
        .pattern(new RegExp('^[a-zA-Z .-_!@#\$%\^&\*]+$')),
    surname:Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z .-_]+$')),
    password: 
        Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')),
    image:
        Joi.string()
        .uri({
            scheme:['https']
        })
        .pattern(new RegExp('^https?:\/\/(www\.)?prueba\.com(/|$)')),
    email:Joi.string()
        .email(),
    address:Joi.string()
        .min(3)
        .max(50)
        .pattern(new RegExp('^[a-zA-Z0-9 .]+$')),
    state:Joi.string()
        .min(3)
        .max(40)
        .pattern(new RegExp('^[a-zA-Z .]+$')),
    country:Joi.string()
        .min(3)
        .max(50)
        .pattern(new RegExp('^[a-zA-Z .]+$')),
    tittle:Joi.string()
        .min(10)
        .max(50),
    description:Joi.string()
        .min(20)
        .max(80)
}).or( 
       'uuid',
       'name',
       'userName',
       'surname',
       'password',
       'image',
       'email',
       'address',
       'state',
       'country',
       'tittle',
       'description'
    )
import { models } from '../../db.js';
import { schema } from './schema.js';
const User = models.User
const SALT_ROUNDS = process.env

const handlerLogin = async (password,name)=>{
    try {
        const { error, value } = schema.validate({
            name:name,
            password:password
        })

        if(error) return false
        else{
            const access = await User.findOne({
                where:{
                    name:name,
                    password:password
                }
            })
            if(!access) return false
            return true
        }
    } catch (error) {
        return false
    }
}

export default handlerLogin;
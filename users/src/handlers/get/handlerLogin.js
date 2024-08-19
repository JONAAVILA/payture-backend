import { models } from '../../db.js';
import { schema } from '../schema.js';
import bcrypt from 'bcrypt'

const { User } = models

const handlerLogin = async (password,userName)=>{
    try {
        const { error } = schema.validate({
            userName:userName,
            password:password
        })

        if(error) return false
        const user = await User.findOne({
            where:{
                userName:userName,
            }
        })
        const passwordCompare = await bcrypt.compare(password,user.password)
        return passwordCompare
    } catch (error) {
        return false
    }
}

export default handlerLogin;
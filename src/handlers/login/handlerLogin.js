import { models } from '../../db.js';
import { schema } from '../schema.js';
import bcrypt from 'bcrypt'
const User = models.User

const handlerLogin = async (password,name)=>{
    try {
        const { error } = schema.validate({
            name:name,
            password:password
        })

        if(error) return false
        const user = await User.findOne({
            where:{
                name:name,
            }
        })
        const passwordCompare = await bcrypt.compare(password,user.password)
        return passwordCompare
    } catch (error) {
        return false
    }
}

export default handlerLogin;
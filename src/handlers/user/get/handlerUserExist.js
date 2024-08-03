import { models } from '../../../db.js';
import { schema } from '../../schema.js';

const { User } = models;
 
const handlerUserExist = async (userName)=>{
    try {
        const { error } = await schema.validate({
            userName:userName
        })
        if(error) return 'invalid'

        const match = await User.findOne({
            where:{
                userName:userName
            }
        })
        if(!match) return false
        return true
    } catch (error) {
        return false
    }
}

export default handlerUserExist;
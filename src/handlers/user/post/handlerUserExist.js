import { models } from '../../../db.js';
import { schema } from '../../schema.js';

const { User } = models;
 
const handlerUserExist = async (email)=>{
    try {
        const { error } = await schema.validate({
            email:email
        })
        if(error) return 'Invalid id'

        const match = await User.findOne({
            where:{
                email:email
            }
        })
        if(!match) return false
        return true
    } catch (error) {
        return false
    }
}

export default handlerUserExist;
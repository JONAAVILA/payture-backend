import { Sequelize } from 'sequelize';
import { models } from '../../db.js';
import { schema } from '../schema.js';

const { User } = models;
 
const handlerCheckEmail = async (email)=>{
    try {
        const { error } = schema.validate({
            email:email
        })
        if(error) throw new Error(false) 

        const match = await User.findOne({
            where:{
                email:{
                    [Sequelize.Op.eq]:email
                }
            }
        })
        if(match) return false
        return true
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerCheckEmail;
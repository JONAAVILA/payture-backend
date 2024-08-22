import { Sequelize } from 'sequelize';
import { models } from '../../../db.js';
import { schema } from '../../../utils/schema.js';

const { User } = models;
 
const handlerCheckEmail = async (email)=>{
    try {
        const { error } = schema.validate({
            email:email
        })
        if(error) return false

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
        return false
    }
}

export default handlerCheckEmail;
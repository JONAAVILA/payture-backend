import { Sequelize } from 'sequelize';
import { models } from '../../db.js';
import { schema } from '../schema.js';

const { User } = models;
 
const handlerUserExist = async (email)=>{
    try {
        const { error } = await schema.validate({
            email:email
        })
        if(error) throw new Error('Invalid email') 

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

export default handlerUserExist;
import { models } from "../../../db.js";
import { schema } from "../../../utils/schema.js";
const { User } = models

const handleCheckUsers = async (userName)=>{
    try {
        const { error } = schema.validate({
            userName:userName
        })
        if(error) throw new Error('Error')
            
        const check = await User.findOne({
            where:{
                userName:userName
            },
            attributes:['userName']
        })
        if(check !== null) return false;
        return true
    } catch (error) {
        return false
    }
}

export default handleCheckUsers
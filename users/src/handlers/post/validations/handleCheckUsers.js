import { models } from "../../../db.js";
import { schema } from "../../schema.js";
const { User } = models

const handleCheckUsers = async (userName)=>{
    try {
        const { error } = schema.validate({
            userName:userName
        })
        if(error) throw new Error(false)
          
        const check = await User.findOne({
            where:{
                userName:userName
            }
        })
        if(check) throw new Error(false);
        return true
    } catch (error) {
        return {error:error.message}
    }
}

export default handleCheckUsers
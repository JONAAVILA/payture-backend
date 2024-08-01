import { models } from "../../../db.js";
const User = models.User

const handlerUserByName = async (name)=>{
    try {
        const user = await User.findOne({
            where:{
                name:name
            }
        })
        if(!user) throw new Error(`User ${name} not found`) 
        return user
    } catch (error) {
        return error.message
    }
}

export default handlerUserByName;
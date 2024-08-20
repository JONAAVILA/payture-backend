import { models } from "../../db.js";
const { User } = models

const handleCheckUsers = async (userName)=>{
    const check = await User.findOne({
        where:{
            userName:userName
        }
    })
    if(!check) throw new Error(false)
    return true
}

export default handleCheckUsers
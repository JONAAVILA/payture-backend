import { models } from "../../../db.js";
const User = models.User

const handlerAllUsers = async ()=>{
    try {
        const users = await User.findAll()
        if(!users) throw new Error("Users not found")
        return users
    } catch (error) {
        console.log(error)
        return error 
    }
}

export default handlerAllUsers
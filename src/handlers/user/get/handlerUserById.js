import { models } from "../../../db.js";
const User = models.User

const handlerUserById = async (id)=>{
    try {
        const user = await User.findByPk(id)
        return user
    } catch (error) {
        return 'Ivalid id'
    }
}

export default handlerUserById;
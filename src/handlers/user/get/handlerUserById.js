import { models } from "../../../db.js";
import { schema } from "../../schema.js";
const User = models.User

const handlerUserById = async (id)=>{
    try {
        const { error } = schema.validate({uuid:id})
        if(error) return 'invalid id'
    
        const user = await User.findByPk(id)
        return {
            name:user.name,
            surname:user.surname,
            image:user.image,
        }
    } catch (error) {
        return 'Invalid id'
    }
}

export default handlerUserById;
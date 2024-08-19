import handleCreateUser from "../../handlers/post/handlerCreateUser.js";
import { v4 as uuidv4 } from 'uuid';

const createUser = async (req,res)=>{
    try {
        const id = uuidv4()
        const { name,userName,email,password } = req.body
        const response = await handleCreateUser(id,name,userName,email,password )
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createUser
import handlerCreateUser from '../../../handlers/user/post/handlerCreateUser.js'
import { v4 as uuidv4 } from 'uuid';

const createUser = async (req,res)=>{
    try {
        const uuid = uuidv4()
        const {
            name,
            surname,
            image,
            email,
            password,
            address,
            state,
            country
        } = req.body

        const response = await handlerCreateUser(
            uuid,
            name,
            surname,
            image,
            email,
            password,
            address,
            state,
            country
        )
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createUser;

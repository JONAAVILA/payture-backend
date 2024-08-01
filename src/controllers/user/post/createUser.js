import handlerCreateUser from '../../../handlers/user/post/handlerCreateUser.js'
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const SALT_ROUNDS = Number(process.env)

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

        const passwordHashed = await bcrypt.hashSync(password,SALT_ROUNDS)

        const response = await handlerCreateUser(
            uuid,
            name,
            surname,
            image,
            email,
            passwordHashed,
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

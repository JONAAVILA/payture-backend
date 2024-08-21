import { models } from '../../../db.js';
import { schema } from '../../../utils/schema.js';
import bcrypt from 'bcrypt';
const { User } = models;

const SALT_ROUNDS = Number(process.env)

const handleCreateUser = async (id,name,userName,email,password )=>{
    const { error } = schema.validate({
        uuid:id,
        name:name,
        userName:userName,
        email:email,
        password:password
    })
    if(error) throw new Error('Invalid parameters')

    const passwordHashed = await bcrypt.hashSync(password,SALT_ROUNDS)

    const response = await User.create({
        id:id,
        name:name,
        userName:userName,
        email:email,
        password:passwordHashed
    })
    if(!response) throw new Error('Error to create')
    return 'User created'
}

export default handleCreateUser
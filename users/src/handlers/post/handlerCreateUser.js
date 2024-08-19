import { models } from '../../db.js';
const { User } = models;

const handleCreateUser = async (id,name,userName,email,password )=>{
    const response = await User.create({
        id:id,
        name:name,
        userName:userName,
        email:email,
        password:password
    })
    if(!response) throw new Error('Error to create')
    return 'User created'
}

export default handleCreateUser
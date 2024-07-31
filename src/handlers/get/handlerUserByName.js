const { User } = require('../../db');

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
        return error
    }
}

module.exports = handlerUserByName;
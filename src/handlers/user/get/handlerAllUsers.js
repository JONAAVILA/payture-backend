const { User } = require('../../../db');

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

module.exports = handlerAllUsers
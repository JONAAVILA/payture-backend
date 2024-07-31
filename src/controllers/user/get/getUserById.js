const handlerUserById = require("../../../handlers/user/get/handlerUserById")


const getUserById = async (req,res)=>{
    try {
        const { id } = req.query
        const user = await handlerUserById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getUserById
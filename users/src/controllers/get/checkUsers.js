import handleCheckUsers from "../../handlers/get/handleCheckUsers.js"

const checkUsers = async (req,res)=>{
    try {
        const { userName } = req.query
        const check = await handleCheckUsers(userName)
        res.status(200).json(check)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkUsers
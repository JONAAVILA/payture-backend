import handleCheckUsers from "../../handlers/post/handleCheckUsers.js"

const checkUsers = async (req,res)=>{
    try {
        const { userName } = req.body
        const check = await handleCheckUsers(userName)
        res.status(200).json(check)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkUsers
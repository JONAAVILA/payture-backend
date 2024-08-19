import handlerUserExist from "../../handlers/post/handlerUserExist.js";

const getUserExist = async (req,res) =>{
    try {
        const { email } = req.body
        const match = await handlerUserExist(email)
        res.status(200).json(match)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default getUserExist;
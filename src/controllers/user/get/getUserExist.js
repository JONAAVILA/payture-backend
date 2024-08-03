import handlerUserExist from "../../../handlers/user/get/handlerUserExist.js";

const getUserExist = async (req,res) =>{
    try {
        const { userName } = req.body
        const match = await handlerUserExist(userName)
        res.status(200).json(match)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default getUserExist;
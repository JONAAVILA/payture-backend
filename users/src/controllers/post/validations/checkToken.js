import handlerCheckToken from "../../../handlers/post/validations/tokens/handlerCheckToken.js";

const checkToken = async (req,res)=>{
    try {
        // const token = req.headers['authorization'];
        const response = await handlerCheckToken()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkToken
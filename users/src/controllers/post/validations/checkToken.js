import handlerCheckToken from "../../../handlers/post/validations/tokens/handlerCheckToken.js";

const checkToken = async (req,res)=>{
    try {
        const headers = req.headers['authorization'];
        const token = headers.split(" ")[1]
        const response = await handlerCheckToken(token)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkToken
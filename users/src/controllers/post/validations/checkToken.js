import handlerCheckToken from "../../../handlers/post/validations/tokens/handlerCheckToken"

const checkToken = async (req,res)=>{
    try {
        const token = req.headers['authorization'];
        const response = await handlerCheckToken(token)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkToken
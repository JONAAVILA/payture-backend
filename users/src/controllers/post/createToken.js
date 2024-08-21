import handlerCreateToken from "../../handlers/post/handlerCreateToken"

const createToken = async (req,res)=>{
    try {
        const token = req.headers['authorization'];
        const response = await handlerCreateToken(token)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createToken
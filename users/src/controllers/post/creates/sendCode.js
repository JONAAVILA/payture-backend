import handlerSendCode from "../../../handlers/post/creates/code/handlerSendCode.js";

const sendCode = async (req,res)=>{
    try {
        const { email } = req.body
        const response = await handlerSendCode(email)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default sendCode
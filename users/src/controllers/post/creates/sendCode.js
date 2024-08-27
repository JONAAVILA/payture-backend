import handlerSendCode from "../../../handlers/post/creates/code/handlerSendCode.js";

const sendCode = async (req,res)=>{
    try {
        const { email } = req.body
        const code = await handlerSendCode(email)
        res.status(200).json(code)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default sendCode
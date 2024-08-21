import handlerCheckEmail from "../../handlers/post/handlerCheckEmail.js";

const checkEmail = async (req,res) =>{
    try {
        const { email } = req.body
        const check = await handlerCheckEmail(email)
        res.status(200).json(check)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default checkEmail;
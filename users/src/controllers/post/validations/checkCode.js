import handleCheckCode from "../../../handlers/post/validations/handleCheckCode.js";

const checkCode = async (req,res)=>{
    try {
        const { code } = req.body
        const check = await handleCheckCode(code)
        res.status(200).json(check)
    } catch (error) {
        res.status(200).json({error:error.message})
    }
}

export default checkCode
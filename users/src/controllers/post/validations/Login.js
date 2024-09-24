import handlerLogin from "../../../handlers/post/validations/handlerLogin.js";

const login = async (req,res)=>{
    try {
        const { password,userName } = req.body
        const access = await handlerLogin(password,userName)
        res.status(200).json(access)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default login
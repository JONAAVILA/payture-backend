import handlerLogin from "../../handlers/login/handlerLogin.js"

const getlogin = async (req,res)=>{
    try {
        const { password,userName } = req.body
        const access = await handlerLogin(password,userName)
        res.status(200).json(access)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default getlogin
import { models } from "../../../db.js";
const { Token } = models;

const handleCheckCode = async (code)=>{
    try {
        const token = await Token.findOne({
            active:true,
        })
        if(token.code === code) return true
        return false
    } catch (error) {
        return false
    }
}

export default handleCheckCode
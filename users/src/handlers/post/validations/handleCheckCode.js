import { models } from "../../../db.js";
import { schema } from "../../../utils/schema.js";
import jwt from 'jsonwebtoken';

const { SECRET_KEY } = process.env
const { Code } = models;

const handleCheckCode = async (code,token)=>{
    try {
        const { error } = schema.validate({
            code:code
        })
        if(error) throw new Error(false);

        const decoded = jwt.verify(
            token,
            SECRET_KEY,
        )
        
        const check = await Code.findOne({
            where:{
                code:code,
                active:true,
                email:decoded.email
            }
        })
        if(check) return true
        console.log(check)
        return false
    } catch (error) {
        return false
    }
}

export default handleCheckCode
import jwt from 'jsonwebtoken';
import handlerCode from './handlerCode.js';

const { SECRET_KEY } = process.env

const handlerCheckToken = async (token)=>{
    try {
        jwt.verify(token,SECRET_KEY, async (err,encoded)=>{
            if(err) throw new Error('Invalid access');  
            const codes = await handlerCode(encoded.email)
            if(codes) return 'Token was send'
        })
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerCheckToken
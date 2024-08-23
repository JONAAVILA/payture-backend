import jwt from 'jsonwebtoken';
import createCode from './createCode.js';

const { SECRET_KEY } = process.env

const handlerSendToken = async (token)=>{
    try {
        const codes = jwt.verify(token,SECRET_KEY, async (err,encoded)=>{
            if(err) throw new Error('Invalid access');  
            const codes = await createCode(encoded.email)
            return codes
        })
        if(!codes) throw new Error('Something went wrong');
        return 'Token was send'
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerSendToken
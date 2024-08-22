// import { jwt } from 'jsonwebtoken';
import handlerCode from './handlerCode.js';

// const { SECRET_KEY } = process.env
const encoded = {
    email:'catalinaozzy@gmail.com'
}

const handlerCheckToken = async ()=>{
    try {
        // jwt.verify(token.split(' ')[1],SECRET_KEY, async (err,encoded)=>{
        //     if(err) throw new Error('Invalid access');  
        // })
        const { email } = encoded
        const codes = await handlerCode()
        if(codes) return 'Token was send'
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerCheckToken
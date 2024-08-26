import createCode from './createCode.js';
import { schema } from '../../../../utils/schema.js';

const handlerSendCode = async (email)=>{
    try {
        const { error } = schema.validate({
            email:email
        })
        if(error) throw new Error("Invalid email");
        
        const codes = await createCode(email)
        if(!codes) throw new Error('Something went wrong');
        return 'Token was send'
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerSendCode
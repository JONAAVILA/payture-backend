import createCode from './createCode.js';
import { schema } from '../../../../utils/schema.js';
import createJwt from '../../../../utils/createJwt.js';

const handlerSendCode = async (email)=>{
    try {
        const { error } = schema.validate({
            email:email
        })
        if(error) throw new Error("Invalid email");

        const token = createJwt(email)
        const codes = await createCode(email)
        if(!codes) throw new Error('Something went wrong');
        return token
    } catch (error) {
        return {error:error.message}
    }
}

export default handlerSendCode
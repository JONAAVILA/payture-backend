import { jwt } from 'jsonwebtoken';
import triggerToken from '../../emails/triggerToken.js'

const { SECRET_KEY } = process.env

const handlerCreateToken = (token)=>{
    try {
        jwt.verify(token.split('')[1],SECRET_KEY,(err,encoded)=>{
            if(err) throw new Error('Invalid access');
            const validateToken = triggerToken()
        })
    } catch (error) {
        
    }
}

export default handlerCreateToken
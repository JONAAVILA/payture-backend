import { jwt } from 'jsonwebtoken';
import triggerToken from '../../emails/triggerToken.js'
import { models } from '../../db.js';

const { SECRET_KEY } = process.env
const { Token } = models

const handlerCreateToken = (token)=>{
    try {
        jwt.verify(token.split(' ')[1],SECRET_KEY,(err,encoded)=>{
            if(err) throw new Error('Invalid access');
            const code = triggerToken()
            Token.create(code)
        })
    } catch (error) {
        
    }
}

export default handlerCreateToken
import { jwt } from 'jsonwebtoken';
import { models } from '../../../../db.js';

const { SECRET_KEY } = process.env
const { Token } = models

const handlerCheckToken = async (token)=>{
    try {
        jwt.verify(token.split(' ')[1],SECRET_KEY, async (err,encoded)=>{
            if(err) throw new Error('Invalid access');
            
            const lengthCodes = await Token.findAll()
            if(lengthCodes > 10) throw new Error('To many request code');
            
            const codesActives = await Token.findAll({
                where:{
                    active:true
                }
            })
        })
    } catch (error) {
        
    }
}

export default handlerCheckToken
import { models } from "../../../../db.js"
import triggerToken from '../../../../emails/triggerToken.js';

const { Token } = models

const codesActives = async ()=>{
    const active = await Token.findAll({
        where:{
            active:true
        }
    })
    if(active){
        Token.update({
            active:false
        })
    }

    const code = triggerToken()
    const codeCreated = await Token.create({
        where:{
            code:code
        }
    })
    return codeCreated ? true : false
}
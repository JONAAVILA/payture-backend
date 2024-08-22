import { models } from "../../../../db.js"
import sendMail from "../../../../emails/send.js";
import triggerToken from '../../../../utils/triggerToken.js';
import { addMinutes } from 'date-fns';
const { Token } = models

const handlerCode = async ()=>{
    const now = new Date()
    const active = await Token.findAll()
    
    console.log(active,now)

    if(active.length > 0){
        active.map(t => {
            Token.update(
                {active:false},
                {
                    where:{
                        code:t.dataValues.code
                    }
                }
            )
        })
    }


  

    const currentToken = triggerToken()
    Token.create({
        code:currentToken,
        expiresAt:now
    })
    // await sendMail(email,correntToken)

    return true
}

export default handlerCode
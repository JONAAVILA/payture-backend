import { models } from "../../../../db.js";
import sendMail from '../../../../emails/send.js'
import triggerToken from '../../../../utils/triggerToken.js';
import { addMinutes } from 'date-fns';
const { Code } = models

const createCode = async (email)=>{
    const now = new Date()
    const expire = addMinutes(now,15)
    const active = await Code.findAll()

    if(active.length > 0){
        active.map(t => {
            Code.update(
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
    Code.create({
        code:currentToken,
        expiresAt:expire
    })
    await sendMail(email,currentToken)

    return true
}

export default createCode
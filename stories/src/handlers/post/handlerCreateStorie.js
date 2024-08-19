import { models } from "../../db.js";
import { schema } from "../schema.js";

const { Storie } = models

const handlerCreateStorie = async (id, url, tittle, description)=>{
    try {
        const { error } = await schema.validate({
            uuid:id,
            image:url,
            tittle:tittle,
            description:description
        })
        console.log(error)
        if(error) return 'invalid o missing parameters'
        const storie = await Storie.create({
            url:url,
            tittle:tittle,
            description:description,
            UserId:id
        })
        return storie
    } catch (error) {
        return error
    }
}

export default handlerCreateStorie;
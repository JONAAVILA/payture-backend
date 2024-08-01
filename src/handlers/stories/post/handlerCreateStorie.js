import { models } from "../../../db.js";
const { Stories } = models

const handlerCreateStorie = async (id, url, tittle, description)=>{
    try {
        const storie = await Stories.create({
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
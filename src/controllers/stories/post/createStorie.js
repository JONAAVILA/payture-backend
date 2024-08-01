import handlerCreateStorie from "../../../handlers/stories/post/handlerCreateStorie.js";


const createStorie = async (req,res)=>{
    try {
        const { id, url, tittle, description } = req.body
        const response = await handlerCreateStorie(id, url, tittle, description)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export default createStorie;
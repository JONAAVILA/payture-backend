import { Router } from "express";
import createStorie from "../controllers/post/createStorie.js";

const router = Router()

router.post('/stories/create',createStorie)

export default router;
import { Router } from "express";
import createUser from '../controllers/user/post/createUser.js'
import getAllUsers from "../controllers/user/get/getAllUsers.js";
import getUserByName from "../controllers/user/get/getUserByName.js";
import getUserById from "../controllers/user/get/getUserById.js";

const router = Router()

router.get('/users',getAllUsers)
router.get('/users/name',getUserByName)
router.get('/users/:id',getUserById)

router.post('/login/signin',createUser)

export default router;
import { Router } from "express";
import createUser from '../controllers/user/post/createUser.js'
import getAllUsers from "../controllers/user/get/getAllUsers.js";
import getUserByName from "../controllers/user/get/getUserByName.js";
import getUserById from "../controllers/user/get/getUserById.js";
import getlogin from "../controllers/login/login.js";
import createStorie from "../controllers/stories/post/createStorie.js";
import getUserExist from "../controllers/user/get/getUserExist.js";

const router = Router()

router.get('/users',getAllUsers)
router.get('/users/name',getUserByName)
router.get('/users/:id',getUserById)
router.get('/login',getlogin)

router.post('/users/match',getUserExist)
router.post('/login/signin',createUser)
router.post('/stories/create',createStorie)

export default router;
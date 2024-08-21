import { Router } from "express";
// import getAllUsers from '../controllers/get/getAllUsers.js';
// import getUserById from '../controllers/get/getUserById.js';
// import getUserByName from '../controllers/get/getUserByName.js';
import getlogin from '../controllers/get/getLogin.js';
import getUserExist from '../controllers/post/getUserExist.js';
import updateUsers from '../controllers/post/updateUsers.js';
import createUser from "../controllers/post/createUser.js";
import checkUsers from "../controllers/post/checkUsers.js";

const router = Router()

// router.get('/users',getAllUsers)
// router.get('/users/name',getUserByName)
// router.get('/users/:id',getUserById)
router.get('/login',getlogin)

router.post('/users/check',checkUsers)
router.post('/users/create',createUser)
router.post('/users/match',getUserExist)
router.post('/login/signin',updateUsers)

export default router;
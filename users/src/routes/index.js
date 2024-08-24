import { Router } from "express";
// import getAllUsers from '../controllers/get/getAllUsers.js';
// import getUserById from '../controllers/get/getUserById.js';
// import getUserByName from '../controllers/get/getUserByName.js';
import getlogin from '../controllers/get/getLogin.js';
import checkEmail from '../controllers/post/validations/checkEmail.js';
import updateUsers from '../controllers/post/updates/updateUsers.js';
import createUser from "../controllers/post/creates/createUser.js";
import checkUsers from "../controllers/post/validations/checkUsers.js";
import sendToken from "../controllers/post/validations/sendToken.js";
import checkCode from "../controllers/post/validations/checkCode.js";

const router = Router()

// router.get('/users',getAllUsers)
// router.get('/users/name',getUserByName)
// router.get('/users/:id',getUserById)
router.get('/login',getlogin)
router.get('/login/singin/token',sendToken)

router.post('/users/check',checkUsers)
router.post('/users/check/code',checkCode)
router.post('/users/check/email',checkEmail)
router.post('/users/create',createUser)
router.post('/login/signin',updateUsers)

export default router;
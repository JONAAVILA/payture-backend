const { Router } = require("express");
const createUser = require("../controllers/user/post/createUser");
const getAllUsers = require("../controllers/user/get/getAllUsers");
const getUserByName = require("../controllers/user/get/getUserByName");

const router = Router()

router.get('/users',getAllUsers)
router.get('/users/name',getUserByName)

router.post('/login/signin',createUser)

module.exports = router;
const { Router } = require("express");
const createUser = require("../controllers/post/createUser");
const getAllUsers = require("../controllers/get/getAllUsers");
const getUserByName = require("../controllers/get/getUserByName");

const router = Router()

router.get('/users',getAllUsers)
router.get('/users/name',getUserByName)

router.post('/login/signin',createUser)

module.exports = router;
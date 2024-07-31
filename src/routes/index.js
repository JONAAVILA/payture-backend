const { Router } = require("express");
const createUser = require("../controllers/post/createUser");
const getAllUsers = require("../controllers/get/getAllUsers");

const router = Router();

router.get('/users',getAllUsers)

router.post('/login/signin',createUser)

module.exports = router;
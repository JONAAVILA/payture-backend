const { Router } = require("express");
const createUser = require("../controllers/post/createUser");

const router = Router();

router.post('/login/signin',createUser)

module.exports = router;
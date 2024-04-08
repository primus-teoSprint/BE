const express = require("express");
const router = express.Router();
const { signInKakao } = require("../controllers/userController");

router.post("/kakao/signin", signInKakao);

module.exports = router;

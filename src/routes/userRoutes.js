const express = require("express");
const router = express.Router();
const { signInKakao } = require("../controllers/userController");

/**
 * @swagger
 * /api/users/kakao/signin:
 *   post:
 *     summary: 카카오 계정으로 로그인하고 유저 정보를 반환합니다.
 *     description: 카카오 엑세스 토큰을 사용하여 유저 정보를 조회하고, 시스템에 유저가 없을 경우 새로운 유저를 생성합니다.
 *     tags: [User API]
 *     parameters:
 *       - in: body
 *         name: kakaoToken
 *         required: true
 *         description: 카카오 로그인 후 발급받은 엑세스 토큰입니다.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 유저 정보 조회 성공
 *         schema:
 *           type: object
 *           properties:
 *             kakaoId:
 *               type: string
 *               description: 카카오에서 제공하는 유저 ID
 *             email:
 *               type: string
 *               description: 유저의 이메일 주소
 *             name:
 *               type: string
 *               description: 유저의 이름
 *             profileImage:
 *               type: string
 *               description: 유저의 프로필 이미지 URL
 *       401:
 *         description: 인증 실패 (잘못된 엑세스 토큰)
 */
router.post("/kakao/signin", signInKakao);

module.exports = router;

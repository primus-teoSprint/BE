const { signInKakaoService } = require("../services/userService");

exports.signInKakao = async (req, res) => {
  try {
    const { kakaoToken } = req.body;
    const user = await signInKakaoService(kakaoToken);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

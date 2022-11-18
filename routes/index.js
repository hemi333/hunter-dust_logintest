var express = require("express");
var router = express.Router();

const naverRouter = require("./naver");
const kakaoRouter = require("./kakao");

router.get("/", (req, res) => {
  res.status(200).json({ massage: "서버 정상" });
});

router.use("/kakao", kakaoRouter);
router.use("/naver", naverRouter);

module.exports = router;

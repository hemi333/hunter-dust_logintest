require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

//소셜로그인 네이버
router.get("/", passport.authenticate("naver"));

const naverCallback = (req, res, next) => {
  passport.authenticate("naver", { failureRedirect: "/" }, (err, user, info) => {
    if (err) return next(err);

    const userId = user.authId;
    const userInfo = user;

    const token = jwt.sign({ userId }, process.env.secretKey);
    result = {
      token,
      userInfo, //이메일,프로필사진,닉네임
    };
    // console.log('네이버 콜백 함수 결과', result)
    res.status(200).json({ user: result });
  })(req, res, next);
};

router.get("/callback", naverCallback);

module.exports = router;

const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// プロフィール情報を取得
router.get("/", apiController.getUserProfile);

// プロフィール情報を登録
router.post("/", apiController.createUserProfile);

// プロフィール情報を編集
router.put("/:id", apiController.updateUserProfile);

module.exports = router;

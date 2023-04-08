const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// SNS情報を取得
router.get('/', apiController.getSocialLinks);

// SNS情報を登録
router.post('/', apiController.createSocialLink);

// SNS情報を編集
router.put('/:id', apiController.updateSocialLink);

// SNS情報を削除
router.delete('/:id', apiController.deleteSocialLink);

module.exports = router;

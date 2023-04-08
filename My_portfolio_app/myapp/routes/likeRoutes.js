const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// いいね情報を取得
router.get('/', apiController.getLikes);

// いいね情報を登録
router.post('/', apiController.createLike);

// いいね情報を削除
router.delete('/:id', apiController.deleteLike);

module.exports = router;

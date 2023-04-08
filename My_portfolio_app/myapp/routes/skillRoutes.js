const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// スキル情報を取得
router.get('/', apiController.getSkills);

// スキル情報を登録
router.post('/', apiController.createSkill);

// スキル情報を編集
router.put('/:id', apiController.updateSkill);

// スキル情報を削除
router.delete('/:id', apiController.deleteSkill);

module.exports = router;

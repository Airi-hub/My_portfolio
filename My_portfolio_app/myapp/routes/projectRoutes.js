const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// 作品情報を取得
router.get('/', apiController.getProjects);

// 作品情報を登録
router.post('/', apiController.createProject);

// 作品情報を編集
router.put('/:id', apiController.updateProject);

// 作品情報を削除
router.delete('/:id', apiController.deleteProject);

module.exports = router;

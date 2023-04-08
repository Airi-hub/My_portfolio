const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
});

module.exports = mongoose.model('Like', LikeSchema);

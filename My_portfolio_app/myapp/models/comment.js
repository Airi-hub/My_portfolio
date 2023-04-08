const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);

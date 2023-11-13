const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: { type: Types.ObjectId, ref: 'Author' },
  post: { type: Types.ObjectId, ref: 'Post' }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

const { Schema, model, Types } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: { type: Types.ObjectId, ref: 'Author', required: true },
  comments: [{ type: Types.ObjectId, ref: 'Comment' }]
});

const Post = model('Post', postSchema);

module.exports = Post;

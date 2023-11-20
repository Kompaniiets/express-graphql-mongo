const { Schema, model, Types } = require('mongoose');
const { POST } = require('../common/model-name.constants');

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

const Post = model(POST, postSchema);

module.exports = Post;

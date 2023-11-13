const { Schema, model, Types } = require('mongoose');

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  posts: [{ type: Types.ObjectId, ref: 'Post' }]
});

const Author = model('Author', authorSchema);

module.exports = Author;

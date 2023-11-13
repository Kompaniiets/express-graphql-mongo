const CommentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');

exports.getCommentById = async(id) => {
  return CommentModel.findById(id);
};

exports.getCommentsByPost = async(postId, skip = 0, limit = 50) => {
  return CommentModel
    .find({ post: postId })
    .skip(skip)
    .limit(limit);
};

exports.addComment = async(authorId, postId, text) => {
  const newComment = new CommentModel({
    text,
    author: authorId,
    post: postId
  });
  const savedComment = await newComment.save();

  const post = await PostModel.findById(postId);
  post.comments.push(savedComment._id);

  await post.save();

  return savedComment.toJSON();
};

exports.updateComment = async(id, blog) => {
  return CommentModel.findByIdAndUpdate(id, blog);
};

exports.removeComment = async(id) => {
  return CommentModel.findByIdAndDelete(id);
};

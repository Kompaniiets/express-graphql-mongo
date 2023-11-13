const PostModel = require('../models/post.model.js');

exports.getPostById = async(id) => {
  return PostModel
    .findById(id)
    .populate('author')
    .populate({
      path: 'comments',
      populate: {
        path: 'author',
        model: 'Author'
      }
    })
    .exec();
};

exports.getAllPosts = async(searchString = '', skip = 0, limit = 50) => {
  return PostModel
    .find({
      $or: [
        { title: { $regex: searchString, $options: 'i' } },
        { body: { $regex: searchString, $options: 'i' } }
      ]
    })
    .skip(skip)
    .limit(limit);
};

exports.createPost = async(authorId, payload) => {
  const newPost = new PostModel({
    title: payload.title,
    body: payload.body,
    author: authorId
  });
  const savedPost = await newPost.save();
  return savedPost.toJSON();
};

exports.updatePost = async(id, payload) => {
  return PostModel.findByIdAndUpdate(id, payload);
};

exports.removePost = async(id) => {
  return PostModel.findByIdAndDelete(id);
};

const AuthorModel = require('../models/author.model.js');

exports.getAuthorById = async(id) => {
  return AuthorModel.findById(id);
};

exports.getAllAuthors = async(searchString = '', skip = 0, limit = 50) => {
  return AuthorModel
    .find({
      name: { $regex: searchString, $options: 'i' }
    })
    .skip(skip)
    .limit(limit);
};

exports.createAuthor = async(author) => {
  const newAuthor = new AuthorModel(author);
  const savedAuthor = await newAuthor.save();
  return savedAuthor.toJSON();
};

exports.updateAuthor = async(id, blog) => {
  return AuthorModel.findByIdAndUpdate(id, blog);
};

exports.removeAuthor = async(id) => {
  return AuthorModel.findByIdAndDelete(id);
};

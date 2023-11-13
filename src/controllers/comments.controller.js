const commentService = require('../services/comment.service');

exports.getCommentsByPost = async(req, res) => {
  try {
    const { postId } = req.params;
    const { skip, limit } = req.query;
    const blogs = await commentService.getCommentsByPost(postId, skip, limit);

    res.json({ data: blogs, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCommentById = async(req, res) => {
  try {
    const blog = await commentService.getCommentById(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addComment = async(req, res) => {
  try {
    const blog = await commentService.addComment(req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateComment = async(req, res) => {
  try {
    const blog = await commentService.updateComment(req.params.id, req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeComment = async(req, res) => {
  try {
    const blog = await commentService.removeComment(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

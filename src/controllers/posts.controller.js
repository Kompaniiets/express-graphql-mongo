const postService = require('../services/post.service');

exports.getAllPosts = async(req, res) => {
  try {
    const { search, skip, limit } = req.query;
    const blogs = await postService.getAllPosts(search, skip, limit);

    res.json({ data: blogs, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async(req, res) => {
  try {
    const blog = await postService.getPostById(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async(req, res) => {
  try {
    const blog = await postService.createPost(req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async(req, res) => {
  try {
    const blog = await postService.updatePost(req.params.id, req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removePost = async(req, res) => {
  try {
    const blog = await postService.removePost(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

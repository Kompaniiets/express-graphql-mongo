const authorService = require('../services/author.service');

exports.getAllAuthors = async(req, res) => {
  try {
    const { search, skip, limit } = req.query;
    const blogs = await authorService.getAllAuthors(search, skip, limit);

    res.json({ data: blogs, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorById = async(req, res) => {
  try {
    const blog = await authorService.getAuthorById(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAuthor = async(req, res) => {
  try {
    const blog = await authorService.createAuthor(req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async(req, res) => {
  try {
    const blog = await authorService.updateAuthor(req.params.id, req.body);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAuthor = async(req, res) => {
  try {
    const blog = await authorService.removeAuthor(req.params.id);
    res.json({ data: blog, status: 'success' });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

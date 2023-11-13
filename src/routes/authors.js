const express = require('express');
const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authors.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllAuthors)
  .post(createAuthor);

router
  .route('/:id')
  .get(getAuthorById)
  .put(updateAuthor)
  .delete(deleteAuthor);

module.exports = router;

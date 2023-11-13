const express = require('express');
const {
  getCommentsByPost,
  getCommentById,
  addComment,
  updateComment,
  removeComment
} = require('../controllers/comments.controller');

const router = express.Router();

router
  .route('/')
  .post(addComment);

router
  .route('/posts/:postId')
  .get(getCommentsByPost);

router
  .route('/:id')
  .get(getCommentById)
  .put(updateComment)
  .delete(removeComment);

module.exports = router;


const express = require('express');
const {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  removePost
} = require('../controllers/posts.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllPosts)
  .post(createPost);

router
  .route('/:id')
  .get(getPostById)
  .put(updatePost)
  .delete(removePost);

module.exports = router;

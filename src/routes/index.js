const express = require('express');

const posts = require('./posts');
const authors = require('./authors');
const comments = require('./comments');
const csv = require('./csv');

const router = express.Router();

router.use('/posts', posts);
router.use('/authors', authors);
router.use('/comments', comments);
router.use('/csv', csv);

module.exports = router;

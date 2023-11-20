const express = require('express');
const { parseAndSaveCsvFile } = require('../controllers/csv.controller');

const router = express.Router();

router
  .route('/')
  .post(parseAndSaveCsvFile);

module.exports = router;


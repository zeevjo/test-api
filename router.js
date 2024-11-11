const express = require('express');
const { getData } = require('./repository');

const router = express.Router();

// Define a simple GET route
router.get('/data', (req, res) => {
  const data = getData();
  res.json(data);
});

module.exports = router;
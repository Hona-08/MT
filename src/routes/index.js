const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the TnT Travel and Tourism API');
});

module.exports = router;

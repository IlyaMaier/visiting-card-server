const express = require('express');
const router = express.Router();

// API routes
router.get('/', (req, res) => {
  res.send('Hello World from API');
});

module.exports = router;

router.post('/card', (req, res) => {
  req.on('data', (data) => {
    console.log('received');
  });
  res.send('0');
});

router.get('/card', (req, res) => {
  res.send('{"name":"Example","number":"0123456789", "email":"example@email.com","github":"https://github.com"}');
});

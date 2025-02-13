const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/subData', (req, res) => {
    res.send('get subData');
});

router.get('/likedData', (req, res) => {
    res.send('get likedData');
});

module.exports = router;
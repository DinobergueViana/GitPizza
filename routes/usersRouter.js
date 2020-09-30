const express = require('express');
const router = express.Router();
const usersControler = require('../controllers/usersControler');

router.get('/cadastro', usersControler.create);
router.post('/cadastro', usersControler.store);
router.get('/login');
router.post('/login');

module.exports = router;
const express = require('express');
const router = express.Router();
const usersControler = require('../controllers/usersControler');

router.get('/', usersControler.index)
router.get('/cadastro', usersControler.create);
router.post('/cadastro', usersControler.store);
router.get('/login', usersControler.show);
router.post('/login', usersControler.login);

module.exports = router;
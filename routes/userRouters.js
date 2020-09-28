const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userControler');

router.get('cadastro', userControler.create);
router.post('cadastro', userControler.store);
router.get('login');
router.post('login');

module.exports = router;
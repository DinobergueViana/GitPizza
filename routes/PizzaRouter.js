const express = require('express');
const pizzasController = require('../controllers/pizzasController');
// const itemController = require('../controllers/itemController');
// outra opção de require
// const { Router } = require('express')
const router = express.Router();

router.get('/', pizzasController.index);

router.get('/pizza/:indice', pizzasController.show);
router.get('/add', pizzasController.adicionar);
router.post('/add', pizzasController.salvarPizza);
router.get('/editar', pizzasController.editar);
// router.post('/editar/', pizzasController.atualizarPizza);


module.exports = router;


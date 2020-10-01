const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middlewares/auth')

const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, 'public/img/pizzas')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
 
const upload = multer({ storage });

const pizzasController = require('../controllers/pizzasController');

router.get('/', pizzasController.index);
router.get('/pizza/:indice', pizzasController.show);
router.get('/add', auth, pizzasController.adicionar);
router.post('/add', auth, upload.any(), pizzasController.salvarPizza);
router.get('/editar/:id', auth, pizzasController.editar);
router.put('/editar/:id', auth, upload.any(), pizzasController.update);
router.get('/buscar/?', pizzasController.search);



module.exports = router;

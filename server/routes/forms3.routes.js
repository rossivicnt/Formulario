const express= require('express');
const router= express.Router();

const formulario3 = require ('../controllers/forms3.controller');

router.get('/', formulario3.getformularios3);
router.post('/',formulario3.createformulario3);
router.get('/:Rut',formulario3.getformulario3);
router.get('/id/:id',formulario3.getform3);
router.put('/:id',formulario3.editformulario3);
router.delete('/:id',formulario3.deleteformulario3);

module.exports= router;
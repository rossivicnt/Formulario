const express= require('express');
const router= express.Router();

const formulario2 = require ('../controllers/forms2.controller');

router.get('/', formulario2.getformularios2);
router.post('/',formulario2.createformulario2);
router.get('/:Rut',formulario2.getformulario2);
router.get('/id/:id',formulario2.getform2);
router.put('/:id',formulario2.editformulario2);
router.delete('/:id',formulario2.deleteformulario2);

module.exports= router;
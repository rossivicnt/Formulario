const express= require('express');
const router= express.Router();

const formulario1 = require ('../controllers/forms1.controller');

router.get('/', formulario1.getformularios1);
router.post('/',formulario1.createformulario1);
router.get('/:id',formulario1.getformulario1);
router.put('/:id',formulario1.editformulario1);
router.delete('/:id',formulario1.deleteformulario1);

module.exports= router;
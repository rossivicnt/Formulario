const express= require('express');
const router= express.Router();

const export1 = require ('../controllers/export1.controller');

router.get('/', export1.getExports);
router.post('/',export1.createExport);
router.get('/:id',export1.getExport);
router.put('/:id',export1.editExport);
router.delete('/:id',export1.deleteExport);

module.exports= router;
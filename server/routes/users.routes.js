const express= require('express');
const router= express.Router();

const user = require ('../controllers/users.controller');

router.get('/', user.getUsers);
router.post('/',user.createUser);
router.get('/:email',user.getUser);
router.put('/:id',user.editUser);
router.delete('/:id',user.deleteUser);

module.exports= router;
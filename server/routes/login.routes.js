const express= require('express');
const router= express.Router();

const user = require ('../controllers/login.controller');

router.post('/',user.getUsers);

module.exports= router;
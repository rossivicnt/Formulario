const express= require('express');
const router= express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const user = require ('../controllers/login.controller');

router.post('/',user.getUsers);
router.post('/register', user.register);
router.post('/login', user.login);
//router.get('/profile', auth, ctrlProfile.profileRead);

module.exports= router;
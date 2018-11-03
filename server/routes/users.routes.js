const express= require('express');
const router= express.Router();
var User = require('../models/users');
var passport = require('passport');

const user = require ('../controllers/users.controller');

router.get('/', isValidUser ,function(req,res,next){
    return res.status(200).json(req.user);
  });

router.post('/register',function (req, res, next) {
  var name= req.body.name;
  console.log(name);
    addToDB(req, res);
  });
async function addToDB(req, res) {

    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: User.hashPassword(req.body.password),
        permiso: req.body.permiso,
        creation_dt: Date.now()
    });

    try {
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch (err) {
        return res.status(501).json(err);
    }
}

router.post('/login', function(req,res,next){
    passport.authenticate('local', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(err); }
        return res.status(200).json({message:'Login Success'});
      });
    })(req, res, next);
  });

router.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
});

router.put('/:id',user.editUser);
router.delete('/:id',user.deleteUser);
router.get('/users/:email' ,user.getUser);

function isValidUser(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }

module.exports= router;
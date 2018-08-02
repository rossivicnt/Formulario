const passport = require('passport');
const mongoose = require('mongoose');
const User= require('../models/users');

const loginCtrl= {};

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

loginCtrl.getUsers = async (req, res) => {
    passport.authenticate('local', function(err, user, info){
        var token;
    
        // If Passport throws/catches an error
        if (err) {
          res.status(404).json(err);
          return;
        }
    
        // If a user is found
        if(user){
          token = user.generateJwt();
          res.status(200);
          res.json({
            "token" : token
          });
        } else {
          // If user is not found
          res.status(401).json(info);
        }
      })(req, res);
};

module.exports= loginCtrl;
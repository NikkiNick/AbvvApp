var express = require('express');
var router = express.Router();

let mongoose = require("mongoose");
let User = mongoose.model("User");

let passport = require("passport");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// REGISTREER
router.post('/registreer', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }
  let user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.save(function(err) {
    if (err) { return next(err); }
    return res.json({ token: user.generateJWT() });
  });
});

// LOGIN
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

// check username beschikbaarheid
router.post('/checkusername', function(req, res, next) {
  User.find({username: req.body.username}, 
    function(err, result) {
      if (result.length) {
        res.json({'username': 'alreadyexists'})
      } else {
        res.json({'username': 'ok'})
      }
  });
});

// get user
router.get('/:username', function(req, res, next) {
  let query = User.find({username: req.params.username});
  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('not found ' + req.params.username)); }
    res.json(user);
  });
});
module.exports = router;

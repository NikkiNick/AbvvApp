var express = require('express');
var router = express.Router();

let mongoose = require("mongoose");
let User = mongoose.model("User");

let passport = require("passport");

//User parameter
router.param('userID', function(req, res, next, id) {
  let query = User.findById(id);
  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('Gebruiker ('+id+') niet gevonden!')); }
    req.user = user;
    return next();
  });
}); 

// REGISTREER
router.post('/registreer', function(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.naam || !req.body.voornaam || !req.body.email || !req.body.personeelsnummer) {
    return res.status(400).json({ message: 'Niet alle gegevens zijn ingevuld.' });
  } 
  let user = new User();
  user.username = req.body.username;
  user.naam = req.body.naam;
  user.voornaam = req.body.voornaam;
  user.email = req.body.email;
  user.personeelsnummer = req.body.personeelsnummer;
  user.admin = false;
  user.active = false;
  user.setPassword(req.body.password);
  user.save(function(err) {
    if (err) { return next(err); }
    return res.json({"registered": true});
  });
});

// LOGIN
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Niet alle velden zijn ingevuld'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(!user.active){ return res.status(400).json({ message: '"Deze gebruik is nog niet geactiveerd"' })}
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
// check email beschikbaarheid
router.post('/checkemail', function(req, res, next) {
  User.find({email: req.body.email}, 
    function(err, result) {
      if (result.length) {
        res.json({'email': 'alreadyexists'})
      } else {
        res.json({'email': 'ok'})
      }
  });
});
// check personeelsnummer beschikbaarheid
router.post('/checkpersoneelsnummer', function(req, res, next) {
  User.find({personeelsnummer: req.body.personeelsnummer}, 
    function(err, result) {
      if (result.length) {
        res.json({'personeelsnummer': 'alreadyexists'})
      } else {
        res.json({'personeelsnummer': 'ok'})
      }
  });
});
// get user
router.get('/:username', function(req, res, next) {
  let query = User.findOne({username: req.params.username});
  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('Gebruiker [' + req.params.username +'] niet gevonden')); }
    res.json(user);
  });
});

router.get('/', function(req, res, next) {
  let query = User.find();
  query.exec(function(err, users) {
    if (err) { return next(err); }
    res.json(users);
  });
});

router.delete('/verwijder/:userID', function(req, res) {
  req.user.remove(function(err) {
    if (err) { return next(err);}
    res.json({"deleted": true});
  });
});

// gebruiker activeren
router.put('/activeer/:userID', function(req, res) {
  req.user.active = true;
  req.user.save(function(err) {
    if (err) { return next(err);}
    res.json({"activated": true});
  });
});
// gebruiker deactiveren
router.put('/deactiveer/:userID', function(req, res) {
  req.user.active = false;
  req.user.save(function(err) {
    if (err) { return next(err);}
    res.json({"deactivated": true});
  });
});

//profiel aanpassen
router.put('/wijzig/:userID', function(req, res) {
  req.user.username = req.body.username;
  req.user.naam = req.body.naam;
  req.user.voornaam = req.body.voornaam;
  req.user.email = req.body.email;
  req.user.personeelsnummer = req.body.personeelsnummer;
  req.user.save(function(err) {
    if (err) { return next(err);}
    res.json({"changed": true});
  });
});
module.exports = router;

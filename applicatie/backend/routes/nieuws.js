var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Nieuwsbericht = mongoose.model('Nieuwsbericht');

let jwt = require('express-jwt');
let auth = jwt({secret: process.env.ABVV_BACKEND_SECRET});




//nieuwsbericht parameter
router.param('nieuwsberichtID', function(req, res, next, id) {
  let query = Nieuwsbericht.findById(id);
  query.exec(function (err, nieuwsbericht){
    if (err) { return next(err); }
    if (!nieuwsbericht) { return next(new Error('Nieuwsbericht niet gevonden')); }
    req.nieuwsbericht = nieuwsbericht;
    return next();
  });
});   

// DELETE REQUESTS

  //nieuwsbericht verwijderen
  router.delete('/verwijder/:nieuwsberichtID', function(req, res) {
    req.nieuwsbericht.remove(function(err) {
      if (err) { return next(err);}
      res.json(req.nieuwsbericht);
    });
  });




// GET REQUESTS

  // alle nieuwsberichten ophalen
  router.get('/', function(req, res, next) {
    let query = Nieuwsbericht.find();
    query.exec(function(err, nieuwsberichten) {
      if (err) { return next(err); }
      res.json(nieuwsberichten);
    });
  });

  // 1 nieuwsbericht ophalen
  router.get('/:nieuwsberichtID', function(req, res, next) {
    res.json(req.nieuwsbericht);
  });



// POST REQUESTS

  //nieuwsbericht plaatsen
  router.post('/', function (req, res, next) {
    let nieuwsbericht = new Nieuwsbericht(req.body);
    nieuwsbericht.save(function(err, rec) {
      if (err){ return next(err); }
      res.json(rec);
    });
  });  


// PUT REQUESTS

  // nieuwsbericht aanpassen
  router.put('/wijzig/:nieuwsberichtID', function(req, res) {
    req.nieuwsbericht.titel = req.body.titel;
    req.nieuwsbericht.bericht = req.body.bericht;
    req.nieuwsbericht.save(function(err) {
      if (err) { return next(err);}
      res.json(req.nieuwsbericht);
    });
  });

module.exports = router;
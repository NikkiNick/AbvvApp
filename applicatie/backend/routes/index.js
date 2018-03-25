var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Nieuwsbericht = mongoose.model('Nieuwsbericht');

//nieuwsbericht parameter
router.param('nieuwsberichtID', function(req, res, next, id) {
  let query = Nieuwsbericht.findById(id);
  query.exec(function (err, nieuwsbericht){
    if (err) { return next(err); }
    if (!nieuwsbericht) { return next(new Error('not found ' + id)); }
    req.nieuwsbericht = nieuwsbericht;
    return next();
  });
});   

// DELETE REQUESTS

  //nieuwsbericht verwijderen
  router.delete('/API/nieuws/verwijder/:nieuwsberichtID', function(req, res) {
    req.nieuwsbericht.remove(function(err) {
      if (err) { return next(err);}
      res.json(req.nieuwsbericht);
    });
  });




// GET REQUESTS

  // GET home pagina
  router.get('/', function(req, res, next) {
    res.send("server works");
  });

  // alle nieuwsberichten ophalen
  router.get('/API/nieuws', function(req, res, next) {
    let query = Nieuwsbericht.find();
    query.exec(function(err, nieuwsberichten) {
      if (err) { return next(err); }
      res.json(nieuwsberichten);
    });
  });

  // 1 nieuwsbericht ophalen
  router.get('/API/nieuws/:nieuwsberichtID', function(req, res, next) {
    res.json(req.nieuwsbericht);
  });



// POST REQUESTS

  //nieuwsbericht plaatsen
  router.post('/API/nieuws', function (req, res, next) {
    let nieuwsbericht = new Nieuwsbericht(req.body);
    nieuwsbericht.save(function(err, rec) {
      if (err){ return next(err); }
      res.json(rec);
    });
  });  


// PUT REQUESTS

  // nieuwsbericht aanpassen
  router.put('/API/nieuws/wijzig/:nieuwsberichtID', function(req, res) {
    req.nieuwsbericht.titel = req.body.titel;
    req.nieuwsbericht.bericht = req.body.bericht;
    req.nieuwsbericht.save(function(err) {
      if (err) { return next(err);}
      res.json(req.nieuwsbericht);
    });
  });

module.exports = router;
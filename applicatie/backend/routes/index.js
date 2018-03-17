var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Nieuwsbericht = mongoose.model('Nieuwsbericht');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("server works");
});

module.exports = router;

//alle nieuwsberichten ophalen
router.get('/API/nieuwsberichten/', function(req, res, next) {
  Nieuwsbericht.find(function(err, nieuwsberichten) {
    if (err) { return next(err); }
    res.json(nieuwsberichten);
  });
});

//nieuwsbericht plaatsen
router.post('/API/nieuwsberichten/', function (req, res, next) {
  let nieuwsbericht = new Nieuwsbericht(req.body);
  nieuwsbericht.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

var mongoose = require('mongoose');

var NieuwsberichtSchema = new mongoose.Schema({
  id: String,
  titel: String,
  bericht: String,
  toegevoegdOp: Date,
  toegevoegdDoor: String
});	

mongoose.model('Nieuwsbericht', NieuwsberichtSchema);


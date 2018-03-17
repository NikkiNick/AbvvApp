var mongoose = require('mongoose');

var NieuwsberichtSchema = new mongoose.Schema({
  id: Number,
  titel: String,
  bericht: String,
  toegevoegdOp: Date,
  toegevoegdDoor: String
});	

mongoose.model('Nieuwsbericht', NieuwsberichtSchema);


//database verbinding
var mongoose = require('mongoose');
mongoose.connect(process.env.ABVV_DATABASE || 'mongodb://localhost/abvv_db');



// passport
let passport = require('passport');
require('./config/passport');

// models
require('./models/User');
require('./models/Nieuwsbericht');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var nieuws = require('./routes/nieuws');
var users = require('./routes/users');


var app = express();
let cors = require('cors');
app.use(cors({origin: "*"}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', index);
app.use('/API/nieuws', nieuws);
app.use('/API/gebruiker', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Error connecting DB - Not Found');
  err.status = 404;
  next(err);
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;



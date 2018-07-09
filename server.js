// server.js

// set up ======================================================================
// get all the tools/modules we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
//talk to mongo db
var mongoose = require('mongoose');
var passport = require('passport');
//see error messages
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
//pulls stuff out of dom
var bodyParser   = require('body-parser');
var session      = require('express-session');
//pulling in database object
var configDB = require('./config/database.js');
//gloabal variable for database
var db

// configuration ===============================================================
mongoose.connect(configDB.url, { useMongoClient: true }, (err, database) => {
  if (err) return console.log(err)
  db = database
  //function call passing in express, passport and database files
  require('./app/routes.js')(app, passport, db);
}); // connect to our database



require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'rcbootcamp2018a', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
//require('./app/routes.js')(app, passport, db); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

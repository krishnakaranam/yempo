// server.js
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');
//var filters = require('./public/js/filters.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to mongodb database

require('./config/passport')(passport); // passing passport for configuration

// set up express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from front end
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating (temporary replacement to IONIC front end)

// required for passport
app.use(session({
    secret: 'krishnakaranam3732@gmail.com', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(__dirname + '/public'));

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('/api/filters/mostfollowers', function(req, res) {
	res.send(JSON.stringify(req.user.twitter.followers));
});

app.get('/api/filters/gateway', function(req, res) {
	res.send(JSON.stringify(req.user.twitter.gateway));
});

// launch ======================================================================
app.listen(port);
console.log('yempo is active locally on port ' + port);

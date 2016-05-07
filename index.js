// import the modules we want to use
var chalk = require('chalk');
var express = require('express');
var ejs = require('ejs');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./config/config.json');
var bodyParser = require('body-parser');
var mongo = require('mongo');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var geolocation = require('node-geolocation');


// create an application
var app = express();

// connect to our database
mongoose.connect('mongodb://localhost/liveQA');
var db = mongoose.connection;

// Initialize cors: Cross Origin Resource Sharing
// by default, you can only request on the same domain.
// for example: only the site www.myApp.com can call www.myApp.com/api/users/....
// if you want to make a different application on another url
// or you set it up on http://localhost:5000 for example (a different port)
// then you will need to use this cors module to 'allow' cross origin calls.
app.use(cors());

// register ejs as our view engine,
// express will now take ejs files from the views folder
// see our index url for an example.
app.set('view engine', 'ejs');

// host a static folder (for css files and images)
// this public folder will be hosted on the root,
// so anything you put in it will be available on '/'
app.use(express.static('public'));

// the body parser will parse json we post to a url
// and make it available on the request under req.body
app.use(bodyParser());
app.use(bodyParser.json());



app.use(passport.initialize());
app.use(passport.session());

/* ========= mijn probeersel====== */





/*=========einde probeersel ========*/

// include our router
app.use('/', require('./routers/index'));
app.use('/login', require('./routers/login'));
app.use('/registreer', require('./routers/signup'));
app.use('/create', require('./routers/create'));
app.use('/discussion', require('./routers/discussion'));



// fire up our server, on port 3000.
app.listen(config.port, function () {
  console.log(chalk.blue('Your app is available on ' + chalk.bold.yellow('http://localhost:' + config.port) + '!'));
});



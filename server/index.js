var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bcrypt = require('bcrypt')
// var router=require('./routes.js');
var session = require('express-session');
var db = require('../database-mongo/index');
// -------------------------------------------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
// --------------------------------------------------------
app.use(session({
 secret:"123456",
 resave: false,
 saveUninitialized: true
}))

// //using router for the request handling with all routes defined inside.
// // app.use('/',router)

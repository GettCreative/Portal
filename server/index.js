var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var bodyParser = require('body-parser');
var router=require('./routes.js');
var session=require('express-session');

var app = express();
//adding 
//adding express-session to our app.
app.use(session({
  secret:"123456",
  resave: false,
  saveUninitialized: true
}))

//using router for the request handling with all routes defined inside.
app.use('/',router)


// app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

var port =  process.env.PORT || 3000
app.listen( port , function() {
  console.log('listening on port: ', port);
})


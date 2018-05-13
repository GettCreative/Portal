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
app.post("/signup",function(req,res) {
    var email =req.body.email
    var username = req.body.username
    var name = req.body.name
    var password = req.body.password
    bcrypt.hash(password,10,function(err,hash) {
        if(err){
            console.log('err in hashing ', err)
        }
        db.save({
            email:email,
            username:username,
            name:name,
            password:hash
        },function (err,data) {
            if(err){
                console.log('err in saving ',err)
            }
            console.log("user saved",data)
            var sess = function(req,res,aUser,username,b){
             req.session.regenerate(function(){
               req.session.user=aUser;
               if (b) {
                 console.log(`Welcome  you create new user and you are logged in now`)
               }else{
                 console.log(`Welcome you are logged in now`)
               }
             })
            }
            sess(req,res,data,email,data)
        })
    })
})
//login
app.post('/login',function(req,res) {
    var email = req.body.email
    var pass = req.body.password
    db.User.findOne({email:email},function(err, data) {
        console.log(data)
        if( err ){
            console.log("err while finding user",err)
        }
        bcrypt.compare(pass , data.password,function (err,match) {
            if(!match ){
                console.log("password incorrect" , err)
            }
                console.log(data  , match)
        })
    })
})

var port = 3000
app.listen( port , function() {
 console.log('listening on port: ', port);
})
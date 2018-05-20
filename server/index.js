var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bcrypt = require('bcrypt')
var utils=require('./utils')
var session = require('express-session');
var db = require('.././database-mongo/index');
// -------------------------------------------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
// --------------------------------------------------------
app.use(session({
secret:"123456",
resave: false,
saveUninitialized: true
}))



//signup
app.post("/signup",function(req,res){
    console.log("hey")
 var email =req.body.email
 var username = req.body.username
 var name = req.body.name
var password = req.body.password
 //checking for a username,and if it doesn't exist it will create an account
 //and store the hashed password.
 db.User.findOne({username:username},function(err,user){
   if(!user){
     bcrypt.hash(password,10,function(err,hash){
         var user=new User({
           email:email,
           username:username,
           name:name,
           password:hash
         })
         user.save(function(err,user){
           console.log('Successful signup');
           //createSession will make a new session and store the user object in it.
           utils.createSession(req,res,user,username,username);
         })
     })
 }else{
   console.log('This username already exists in database ..!');
   res.send( `you signup before` )
 }
 })
});




//login
//let the login with email and password "salsabeel"
app.post("/login",function(req,res){
 var email=req.body.email;
 var password=req.body.password;
 //searching for user by the username and comparing passwords.
 db.User.findOne({email:email},function(err,user){
   if(!user){
     console.log('This email does not exist in database !');
     res.send( `this email does not exist in database please create new user now` )
   }else{
   bcrypt.compare(password,user.password,function(err,match){
         if(match){
           console.log('Successful login');
           utils.createSession(req,res,user,username);
         }else{
           console.log('Wrong password .!');
           res.send(`this password is wrong please insert the username again and your correct password`);
     }
   })}
 })
});


var port = 3000
app.listen( port , function() {
console.log('listening on port: ', port);
})

































// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var bcrypt = require('bcrypt')
// // var router=require('./routes.js');
// var session = require('express-session');
// var db = require('../database-mongo/index');
// // -------------------------------------------------------
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended : true}))
// // --------------------------------------------------------
// app.use(session({
//  secret:"123456",
//  resave: false,
//  saveUninitialized: true
// }))

// // //using router for the request handling with all routes defined inside.
// // // app.use('/',router)
// app.post("/signup",function(req,res) {
//     var email =req.body.email
//     var username = req.body.username
//     var name = req.body.name
//     var password = req.body.password
//     bcrypt.hash(password,10,function(err,hash) {
//         if(err){
//             console.log('err in hashing ', err)
//         }
//         db.save({
//             email:email,
//             username:username,
//             name:name,
//             password:hash
//         },function (err,data) {
//             if(err){
//                 console.log('err in saving ',err)
//             }
//             console.log("user saved",data)
//             var sess = function(req,res,aUser,username,b){
//              req.session.regenerate(function(){
//                req.session.user=aUser;
//                if (b) {
//                  console.log(`Welcome  you create new user and you are logged in now`)
//                }else{
//                  console.log(`Welcome you are logged in now`)
//                }
//              })
//             }
//             sess(req,res,data,email,data)
//         })
//     })
// })
// //login
// app.post('/login',function(req,res) {
//     var email = req.body.email
//     var pass = req.body.password
//     db.User.findOne({email:email},function(err, data) {
//         console.log(data)
//         if( err ){
//             console.log("err while finding user",err)
//         }
//         bcrypt.compare(pass , data.password,function (err,match) {
//             if(!match ){
//                 console.log("password incorrect" , err)
//             }
//                 console.log(data  , match)
//         })
//     })
// })

// var port = 3000
// app.listen( port , function() {
//  console.log('listening on port: ', port);
// })
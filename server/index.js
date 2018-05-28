var bodyParser = require('body-parser');
var express = require('express');
//
const AWS = require('aws-sdk');
const Busboy = require('busboy');

const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
var app = express();
//
app.use(busboy());
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true, parameterLimit: 1000000}));
app.use(bodyParser.json())
app.use(busboyBodyParser());
var fs=require('fs')
var bcrypt = require('bcrypt')
var utils=require('./utils')
var session = require('express-session');
var db = require('.././database-mongo/index');
var mongoose=require('mongoose')
var User=mongoose.model('User')



// const AWS = require('aws-sdk');
// const Busboy = require('busboy');

const BUCKET_NAME = 'salsabeelvideos';
//3dobjects
const IAM_USER_KEY = 'AKIAJNSUCKLK2Y2SGPPA';
//AKIAJNSUCKLK2Y2SGPPA
const IAM_USER_SECRET = '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';
// -------------------------------------------------------
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended : true}))
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '1000mb', extended: true, parameterLimit: 1000000}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//
// app.use(busboyBodyParser());
// --------------------------------------------------------
app.use(session({
secret:"123456",
resave: false,
saveUninitialized: true
}))



//signup
app.post("/signup",function(req,res){
 var email =req.body.email
 var username = req.body.username
 var name = req.body.name
var password = req.body.password
 //checking for a username,and if it doesn't exist it will create an account
 //and store the hashed password.
 User.findOne({email:email},function(err,user){
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
           utils.createSession(req,res,user,email,email);
         })
     })
 }else{
   console.log('This email is already taken ..!');
    res.status(404).send(err);
 }
 })
});




//login
//let the login with email and password "salsabeel"
app.post("/login",function(req,res){
 var email=req.body.email;
 var password=req.body.password;
 //searching for user by the username and comparing passwords.
 User.findOne({email:email},function(err,user){
  if(err)
    {res.send(err)}

   else if(!user){
     // console.log('This email does not exist in database !');
     res.status(404).send( "this user does not exist in database please create new user now" )
   }
   else{
   bcrypt.compare(password,user.password,function(err,match){
         if(match){
           
           utils.createSession(req,res,user);

         }else{
           // console.log('Wrong password .!');
           res.status(404).send(err);
     }
   })}
 })
});

app.post('/api/upload', function (req, res, next) {
  const element1 = req.body.element1;
  var busboy = new Busboy({ headers: req.headers });

  console.log('element1');
  console.log(element1);

  busboy.on('finish',function(){
      console.log('upload finished')
  })


  console.log('files')
  console.log(req.files)


  const file=req.files.element2;
  console.log(file)

  let s3bucket=new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  Bucket: BUCKET_NAME,

  });


s3bucket.createBucket(function () {
  var params = {
   Bucket: BUCKET_NAME,
   Key: file.name,
   Body: file.data,
  };

   s3bucket.upload(params, function (err, data) {
   if (err) {
    console.log('error in callback');
    console.log(err);
   }
   console.log('success');
   console.log(data);
  });
});

 req.pipe(busboy);
});





var port = 3000
app.listen( port , function() {
console.log('listening on port: ', port);
})































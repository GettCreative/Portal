var router=require('express').Router();
// var controller=require('../database-mongo/PatientController');
var utils=require('./utils')
var bcrypt=require('bcrypt')
var bodyParser = require('body-parser');
var path=require('path')
var mongoose=require('mongoose')
var User=mongoose.model('User')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended : true}))

//**routes and handling requests.**//

router.route('/login')
.get(function(req,res){
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
})

.post(function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;
  //searching for user by the username and comparing passwords.
  User.findOne({userName:userName},function(err,user){
    if(!user){
      console.log('This username does not exist in database ..!');
      res.send(`Sorry this username does not exist in database please create new user now // if you have account but insert wrong username please go to login page again and insert your correct username`)
    }else{
    bcrypt.compare(password,user.password,function(err,match){
          if(match){
            console.log('Successful login');
            utils.createSession(req,res,user,userName);
          }else{
            console.log('Wrong password ..!');
            res.send(`Sorry this password is wrong, please insert the username again and your correct password`);
      }
    })}
  })
});

router.route('/signup')
.get(function(req,res){
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
})

.post(function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;
  var firstName=req.body.firstName;
  var lastName=req.body.lastName;

  //checking for a username,and if it doesn't exist it will create an account
  //and store the hashed password.
  User.findOne({userName:userName},function(err,user){
    if(!user){
      bcrypt.hash(password,10,function(err,hash){
          var user=new User({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            password:hash
          })
          user.save(function(err,user){
            console.log('Successful signup');
            //createSession will make a new session and store the user object in it.
            utils.createSession(req,res,user,userName,userName);
          })
      })
  }else{
    console.log('This username already exists in database ..!');
    res.send(`Sorry you signup before please insert the username again and your password to log in`)
  }
  })
});
//this route when accessed will destroy the current session.
router.route('/logout')
  .get(function(req,res){
    req.session.destroy()
    console.log('Successful logout');
    res.send(`Goodbye you logout now .. see you later`);
    })

//homepage route with checkUser middleware to check for a user key in the session object.
router.route('/')
.get(utils.checkUser,function(req,res){
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
})

module.exports=router;

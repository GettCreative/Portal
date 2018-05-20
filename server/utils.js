//helping functions to check if the user is logged in.
var session=require('express-session');
// var path=require('path')

//this function will check for a user key in the session object
//returns true if it exists,false if not.
exports.isLoggedIn=function(req,res){
  if(req.session.user){
    console.log(req.session.user);
    return true
  }
  return false;
}

//this function will use the isLoggedIn function and will make a check on most
//routes,if the user is logged in it will handle his request.
exports.checkUser=function(req,res,next){
  if(!exports.isLoggedIn(req)){
    console.log('You Are not logged in');
    res.send('<script>alert("Sorry you are not logged in please login first to can access this page")</script>'+'<script>window.location.href= window.location.origin+"/login" </script>')
  }else{
    console.log('next');
    next()
  }
}

//this function will create a session and store the user info in it.
exports.createSession=function(req,res,aUser,username,b){
  req.session.regenerate(function(){
    req.session.user=aUser;
    if (b) {
      res.send(`Welcome you create new user and you are logged in now`)
    }else{
      res.send(`Welcome  you are logged in now`)
    }
  })
}
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user');

//now we need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
//connection error occurs
db.on('error', function() {
  console.log('mongoose connection error');
});
//connect successfully
db.once('open', function() {
  console.log('mongoose connected successfully');
});

//create our schema
var userSchema = mongoose.Schema({
  userName:{type:String,unique:true},
  password:String,
  firstName:String,
  lastName:String

});


//functionality to our instances:
var save=function(userInstance){

  userInstance.save(function(err,user){
    if(err){
      console.log(err)
    }else{
      console.log('saved user!')
    }
  })
}


//compiling our schema into a Model(class)
var User = mongoose.model('User', userSchema);

module.exports=User;
module.exports.save = save;

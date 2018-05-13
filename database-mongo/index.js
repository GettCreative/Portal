var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portal');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  email: String,
  password: String,
  name:String,
  username:String
});

var User = mongoose.model('User', userSchema);

var save=function(PatientInstance){

  PatientInstance.save(function(err,patient){
    if(err){
      console.log(err)
    }else{
      console.log('saved patient!')
    }
  })
}

module.exports.save = save;
module.exports.user = User
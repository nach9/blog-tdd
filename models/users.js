var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connection.openUri(`mongodb://localhost/blog-test`);


var userSchema = new Schema({
  name:String,
  username:{type: String,unique: true,required:true},
  password:{type: String,required:true},
  role:String,

});

var User = mongoose.model('User', userSchema);

module.exports = User;

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/JangEIN');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id : {type : String},
  name : {type: String},
  phoneNum : {type: String},
  passwd : {type : String},
  token : {type: String}
});

var HealthSchema = mongoose.Schema({
  name : {type: String, required: true},
  percent : {type: String, required: true},
  count : {type: String, required: true},
  token : {type: String}
});

var JobSchem = mongoose.Schema({
  name : {type: String, required: true},
  percent : {type: String, required: true},
  count : {type: String, required: true},
  token : {type: String}
});


Users = mongoose.model('users', UsersSchema);
Health = mongoose.model('cm', HealthSchema);
Job = mongoose.model('campaign', JobSchem);

exports.Users = Users;
exports.Health = Health;
exports.Job = Job;
exports.db = db;

const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the database before tests run

before(function(done){
    mongoose.connect('mongodb://MiloMacPhail:Pandahead7!@ds153890.mlab.com:53890/mongodbplaylist', {useNewUrlParser: true});
    mongoose.connection.once('open', function(){
   console.log("Connection made!!!");
   done();
}).on('error', function(error){
    console.log('Connection error:', error);
});
});


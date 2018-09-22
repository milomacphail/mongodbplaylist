const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true});

mongoose.connection.once('open', function(){
   console.log("Connection made!!!");
}).on('error', function(){
    console.log('Connection error:', error);
});
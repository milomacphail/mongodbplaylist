const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://MiloMacPhail:Pandahead7!@ds153890.mlab.com:53890/mongodbplaylist', {useNewUrlParser: true});

//Create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;

var myChar = new MarioChar({});
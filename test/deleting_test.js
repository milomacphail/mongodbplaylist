const assert = require('assert');
const MarioChar = require('../models/mariochar')


//deleting records
describe('Finding records', function(){
       
       var char;
       
       beforeEach(function(done){
       
        char =  new MarioChar({
         name: "Mario" 
        });
        char.save().then(function(){
         (char.isNew === false);
         done();
      });
       });
   
   //Create tests 
    it("Deletes one record in the database", function(done){
      MarioChar.findOneAndRemove({name: "Mario"}).then(function(){
         MarioChar.findOne({name: "Mario"}).then(function(result){
            assert(result === null);
            done();
         });
      });
    });
});
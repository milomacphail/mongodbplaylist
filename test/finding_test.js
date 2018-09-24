const assert = require('assert');
const MarioChar = require('../models/mariochar')


//describe tests
describe('Finding records', function(){
       beforeEach(function(done){
       
        var char =  new MarioChar({
         name: "Mario" 
        });
        char.save().then(function(){
         (char.isNew === false);
         done();
      });
       });
   
   //Create tests 
    it("Finds one record in the database", function(done){
      MarioChar.findOne({name : "Mario"}).then(function(result){
          assert(result.name==="Mario");
          done();
      });
      
      
    });
    
    
}); 
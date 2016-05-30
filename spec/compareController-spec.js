
describe('compareController', function () {
   var answer =[];
   var input = [];
   var compareController;
   beforeEach(() => {
       answer = [1,2,4,7];
       input = [];
       compareController = require('../src/controller');
   });

   it('should retursn Congratulations when input 1247 and answer is 1247',function (){
       input=[1,2,4,7];
       expect(compareController.compareController(input,answer)).toBe('4A0B')
    });
   it('should play correct when has illegal input',function (){
       input=[1,2,2,4];
       expect(compareController.compareController(input,answer)).toBe('illegal input');
   });
});
describe('randomGeneral', function () {
   var randomGeneral;
   beforeEach(() => {
       randomGeneral = require('../src/gameCore');
   }) ;
   it('should return four length number',function (){
       expect(randomGeneral.randomGeneral().length).toBe(4);
   });
});
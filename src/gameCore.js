var randomGeneral = function(){
    var length = 4;
    var randomNumber = [0,1,2,3,4,5,6,7,8,9];
    var result = [];
    for(;length--;){
        index = Math.floor(Math.random()*randomNumber.length);
        result[length] = randomNumber[index];
        randomNumber.splice(index,1); 
    }
    return result;
}

var validInputAndRandomNumber = function(randomNumber){
    var regular = /\d/;
    if(randomNumber.length != 4){
        return false ;
    }
    for(var i=0;i<randomNumber.length;i++){
        number = randomNumber[i];
        if(!(number / 10 < 1 && regular.test(number))){
            return false;
        }
        var existNumber = randomNumber.filter((element) => {
            return element == number;
        });
        if (existNumber.length >=2){
            return false;
        }
    };
    return true;
}

var compareInputAndAnswer = function(inputs,answer){
    var aCount = 0;
    var bCount = 0;
    for(var i=0;i<inputs.length;i++){
        var exitsIndex = answer.indexOf(inputs[i]);
        if(exitsIndex >= 0){
            if(exitsIndex === i){
                aCount++;
            }else{
                bCount++;
            }
        }
    }
    return aCount+'A'+bCount+'B';
}
module.exports = {
    randomGeneral : randomGeneral,
    validInputAndRandomNumber : validInputAndRandomNumber,
    compareInputAndAnswer : compareInputAndAnswer
}
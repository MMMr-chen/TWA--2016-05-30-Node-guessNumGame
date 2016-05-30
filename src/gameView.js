function gamePrint(compareResult,gameStatusResult) {
    var resultText = '';
    resultText += compareResult + '\n';
    resultText += gameStatusResult;
    return resultText;
}
module.exports = {
    gamePrint:gamePrint
}
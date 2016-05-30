
var maxStep = 7;
var step = 0;
var core = require('../src/gameCore');
var print = require('../src/gameView');

var answer = core.randomGeneral();
var compareController = function (inputs, answer) {
    var resultText = '';
    if (!core.validInputAndRandomNumber(inputs)) {
        resultText += 'illegal input';
        step--;
    } else {
        var result = core.compareInputAndAnswer(inputs, answer);
        resultText += result;
    }
    return resultText;
}

var gameInit = function () {
    step = 0;
    answer = core.randomGeneral();
}

var gameStatusController = function (result) {
    var resultText = '';
    if (result === '4A0B') {
        resultText += 'Congratulations!\n\nNewGame Begin!\n';
        gameInit();
    }
    step++;
    if (step >= maxStep) {
        resultText += 'Fails!\n\nNewGame Begin!\n';
        gameInit();
    }
    return resultText;
}

var gameController = function (inputs) {
    compareResult = compareController(inputs, answer);
    gameStatusResult = gameStatusController(compareResult);
    return print.gamePrint(compareResult,gameStatusResult);
}
var main = function (input) {
    inputArray = input.split('');
    gameInput = inputArray.map(function (element) {
        return parseInt(element);
    });
    return gameController(gameInput);
}
module.exports = {
    compareController: compareController,
    gameController: gameController,
    main:main
}
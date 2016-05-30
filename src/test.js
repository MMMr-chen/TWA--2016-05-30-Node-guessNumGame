
var controller = require('../src/controller');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Please input four digits');

rl.on('line', (input) => {
    var result = controller.main(input);
    console.log(`${result}`);
    console.log('Please input four digits');

});
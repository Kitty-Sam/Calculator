const { calculateInputData } = require('~utils/Calculate/calculate');
const parse = (string) => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return Function(`'use strict'; return (${string})`)();
};

const mathOperations = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    evalForInput: (expression) => (Math.round(parse(expression) * 1000) / 1000).toString(),
    calculateInputData,
};

module.exports = mathOperations;

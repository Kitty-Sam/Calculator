export const parse = (string) => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return Function(`'use strict'; return (${string})`)();
};

export const evalForInput = (expression) => (Math.round(parse(expression) * 1000) / 1000).toString();

export const add = (x, y) => x + y;
export const sub = (x, y) => x - y;
export const mul = (x, y) => x * y;
export const div = (x, y) => x / y;

const Command = function (execute, undo, left, right) {
    this.execute = execute;
    this.undo = undo;
    this.left = left;
    this.right = right;
};

const operators = {
    Add: '+',
    Sub: '-',
    Div: '/',
    Mult: '*',
};

const maths = {
    AddCommand: function (left, right) {
        return new Command(add, sub, left, right);
    },
    SubCommand: function (left, right) {
        return new Command(sub, add, left, right);
    },

    MulCommand: function (left, right) {
        return new Command(mul, div, left, right);
    },
    DivCommand: function (left, right) {
        return new Command(div, mul, left, right);
    },
};

const operations = (operator, left, right) => {
    switch (operator) {
        case operators.Add:
            return new maths.AddCommand(left, right);
        case operators.Div:
            return new maths.DivCommand(left, right);
        case operators.Sub:
            return new maths.SubCommand(left, right);
        case operators.Mult:
            return new maths.MulCommand(left, right);
        default:
            return 0;
    }
};

const Calculator = function () {
    let current = 0;
    const commands = [];
    return {
        execute: function (command) {
            current = command.execute(command.left, command.right);
            commands.push(command);
        },

        undo: function () {
            let command = commands.pop();
            current = command.undo(current, command.right);
        },
    };
};

export const calculateInputData = (input) => {
    const calculator = new Calculator();

    const priorities = {
        '*': 1,
        '/': 1,
        '+': 2,
        '-': 2,
    };

    const firstItem = [];
    const array = [];
    const dataInArray = input
        .replace(' ', '')
        .split('')
        .filter((number) => number);

    for (let i = 0; i < dataInArray.length; i++) {
        if (+dataInArray[i] >= 0 && +dataInArray[i - 1] >= 0) {
            dataInArray[i - 1] = dataInArray[i - 1] + dataInArray[i];
            dataInArray.splice(i, 1);
            i -= 1;
        }
    }

    for (let i = 0; i < dataInArray.length; i++) {
        if (+dataInArray[i] >= 0) {
            firstItem.push(+dataInArray[i]);
        } else if (dataInArray[i] === '.') {
            firstItem.push(dataInArray[i]);
        } else if (dataInArray[i] === '(') {
            array.push(dataInArray[i]);
        } else if (dataInArray[i] === ')') {
            while (array[array.length - 1] !== '(') {
                if (array.length < 1) throw new Error('something goes wrong');
                firstItem.push(array.pop());
            }
            array.pop();
        } else if (
            dataInArray[i] === operators.Add ||
            dataInArray[i] === operators.Sub ||
            dataInArray[i] === operators.Mult ||
            dataInArray[i] === operators.Div
        ) {
            while (priorities[[array[array.length - 1]]] >= priorities[dataInArray[i]]) firstItem.push(array.pop());
            array.push(dataInArray[i]);
        }
    }

    while (array.length > 0) firstItem.push(array.pop());
    if (firstItem.includes('(')) throw new Error('something goes wrong');
    if (dataInArray.length === 1) {
        for (let i = 0; i < firstItem.length; i++) {
            if (typeof firstItem[i] === 'number') array.push(firstItem[i]);
            else {
                array.push(calculator.execute(operations(array.pop(), array.pop(), firstItem[i])));

                if (array[array.length - 1] === Infinity) {
                    throw new Error('something goes wrong');
                }
            }
        }
    } else {
        if (dataInArray[dataInArray.length - 1] >= 0) {
            return dataInArray.reduce((previousValue, currentValue) => previousValue + currentValue, '');
        }
    }
    return dataInArray[0];
};

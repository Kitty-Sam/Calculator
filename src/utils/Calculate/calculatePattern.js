const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const priorities = {
    '*': 1,
    '/': 1,
    '+': 2,
    '-': 2,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

        getCurrentValue: function () {
            return current;
        },
    };
};

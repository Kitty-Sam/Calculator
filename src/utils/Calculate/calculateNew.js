const maths = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

export const operators = Object.keys(maths);

const isOperator = (operator) => operators.includes(operator);

const isNumber = (num) => typeof num === 'number' && !Number.isNaN(num);
const isNumbers = (nums) => nums.every(isNumber);
const isValid = (left, right, operator) => isNumbers([left, right]) && isOperator(operator);
const isNotValid = (left, right, operator) => !isValid(left, right, operator);

const calculate = (left, right, operator) => {
    if (isNotValid(left, right, operator)) {
        return NaN;
    }
    const math = maths[operator];
    return math(left, right);
};

const parse = (expression) => {
    const clearExpression = expression.replace(' ', '');
    const hasOperator = (operator) => clearExpression.includes(operator);
    const [currentOperator] = operators.filter(hasOperator);
    const operands = clearExpression.split(currentOperator);

    if (operands.length === 1) {
        const [right] = operands;
        return [NaN, parseFloat(right), currentOperator];
    }

    const [left, right] = operands;
    return [parseFloat(left), parseFloat(right), currentOperator];
};

export default (expression, acc = 0) => {
    const [left, right, operator] = parse(expression);
    const leftOrAcc = Number.isNaN(left) ? acc : left;
    return calculate(leftOrAcc, right, operator);
};

//
// const state = { result: '0' };
//
// const isEmptyState = () => state.result === '0';
// const commands = {
//     '=': () => calculate(state.result).toString(),
//     C: () => '0',
// };
//
// const isOperator = (key: string) => operators.includes(key);
//
// const getOperator = () => {
//     [...state.result].filter(isOperator).pop();
// };
// const isFullExpression = () => {
//     const currentOperator = getOperator();
//     return currentOperator && state.result.split(currentOperator).length > 2;
// };
//
// const isCommand = (key: string) => {
//     return Object.keys(commands).includes(key);
// };
//
// const updateResult = (key: string) => {
//     if (isEmptyState()) {
//         return key;
//     }
//     if (isFullExpression()) {
//         return state.result;
//     }
//     if (isCommand(key)) {
//         const doCommands = commands[key];
//         return doCommands();
//     }
//     return `${state.result}${key}`;
// };
//
// const onClickHandler = (key: string) => {
//     state.result = updateResult(key);
// };

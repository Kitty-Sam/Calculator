const mathOperations = require('./calculator');

describe('Calculator tests: add', () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.add(1, 2)).toBe(3);
    });
});

describe('Calculator tests: sub', () => {
    test('subtracting 2 from 10 should return 8', () => {
        expect(mathOperations.sub(10, 2)).toBe(8);
    });
});

describe('Calculator tests: mult', () => {
    test('multiplying 2 and 1.56 should return 3', () => {
        expect(mathOperations.mul(2, 1.5)).toBe(3);
    });
});

describe('Calculator tests: div', () => {
    test('dividing 8 and 2 should return 4', () => {
        expect(mathOperations.div(8, 2)).toBe(4);
    });
});

describe('Calculator tests: round', () => {
    test('round number should include 3 numbers after dot', () => {
        expect(mathOperations.evalForInput('12.34567')).toBe('12.346');
    });
});

describe('Calculator tests: expression', () => {
    test('2+2*2 should return 6', () => {
        expect(mathOperations.calculateInputData(mathOperations.evalForInput('2+2*2'))).toBe('6');
    });
});

describe('Calculator tests: expression with brackets', () => {
    test('(2+2)*2 should return 8', () => {
        expect(mathOperations.calculateInputData(mathOperations.evalForInput('(2+2)*2'))).toBe('8');
    });
});

describe('Calculator tests: numbers', () => {
    test('numeric operators', () => {
        const num1 = 10;
        const num2 = -10;
        const num3 = 0;

        expect(num1).toBeGreaterThan(5);
        expect(num2).toBeLessThanOrEqual(0);
        expect(num3).toBeGreaterThanOrEqual(0);
    });
});

describe('Calculator tests: change number', () => {
    test('change numeric operators ', () => {
        const num1 = -10;
        const num2 = 10;
        const changer = -1;

        expect(num1 * changer).toBeGreaterThan(5);
        expect(num2 * changer).toBeLessThan(5);
    });
});

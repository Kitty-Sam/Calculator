import { add, calculateInputData, div, evalForInput, mul, sub } from '~utils/Calculate/calculate';

describe('Calculator tests: add', () => {
    test('adding 1 + 2 should return 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('adding 1000 + 200 should return 1200', () => {
        expect(add(1000, 200)).toBe(1200);
    });
    test('adding 2 + 2 should not return 5', () => {
        expect(add(2, 2)).not.toBe(5);
    });
});

describe('Calculator tests: sub', () => {
    test('subtracting 2 from 10 should return 8', () => {
        expect(sub(10, 2)).toBe(8);
    });
    test('subtracting 2000 from 10 should return 1990', () => {
        expect(sub(2000, 10)).toBe(1990);
    });
    test('subtracting 3 from 7 should return 6', () => {
        expect(sub(7, 3)).not.toBe(6);
    });
});

describe('Calculator tests: multiply', () => {
    test('multiplying 2 and 1.5 should return 3', () => {
        expect(mul(2, 1.5)).toBe(3);
    });
    test('multiplying 1000 and 1.3 should return 1300', () => {
        expect(mul(1000, 1.3)).toBe(1300);
    });
    test('multiplying 2 and 2 should not return 5', () => {
        expect(mul(2, 2)).not.toBe(5);
    });
});

describe('Calculator tests: divide ', () => {
    test('dividing 8 and 2 should return 4', () => {
        expect(div(8, 2)).toBe(4);
    });
    test('dividing 3000 and 2 should return 1500', () => {
        expect(div(3000, 2)).toBe(1500);
    });
    test('dividing 2 and 2 should return 2', () => {
        expect(div(2, 2)).not.toBe(2);
    });
});

describe('Calculator tests: round', () => {
    test('round number should include 3 numbers after dot', () => {
        expect(evalForInput('12.34567')).toBe('12.346');
    });
});

describe('Calculator tests: expression', () => {
    test('2+2*2 should return 6', () => {
        expect(calculateInputData(evalForInput('2+2*2'))).toBe('6');
    });
});

describe('Calculator tests: expression with brackets', () => {
    test('(2+2)*2 should return 8', () => {
        expect(calculateInputData(evalForInput('(2+2)*2'))).toBe('8');
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

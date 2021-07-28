import {random} from 'lodash';
import {calculateString, getNthDimensionNumber, round10} from '../math-utils';

describe('round10', () => {
    test('equal', () => {
        expect(round10(55)).toBe(60);
    });

    for (let i = 1; i < 10; i++) {
        const base = i * 10;
        const dimension1 = random(1, 9);
        const final = dimension1 >= 5 ? base + 10 : base;
        const number = base + dimension1;

        test(`equal by cycle, number ${number} to be ${final}`, () => {
            expect(round10(number)).toBe(final);
        });
    }
});

describe('getNthDimensionNumber', () => {
    for (let i = 1; i <= 5; i++) {
        test(`equal for dimension ${i}`, () => {
            const nthDimensionNumbers = [];

            for (let j = 0; j < 20; j++) {
                nthDimensionNumbers.push(getNthDimensionNumber(i));
            }

            expect(nthDimensionNumbers.every(number => number.toString().length === i)).toBe(true);
        });
    }
});

describe('calculateString', () => {
    for (let i = 0; i < 50; i++) {
        const fistNumber =  random(1, 9);
        const secondNumber =  random(1, 9);

        const multRes = fistNumber * secondNumber;
        const divRes = fistNumber / secondNumber;
        const addRes = fistNumber + secondNumber;
        const subRes = fistNumber - secondNumber;
        const powRes = Math.pow(fistNumber, secondNumber);

        const cases = [
            [multRes, '*'],
            [multRes, '•'],
            [divRes, '/'],
            [divRes, ':'],
            [addRes, '+'],
            [subRes, '-'],
            [powRes, '^'],
        ];

        cases.forEach(([result, action]) => {
            test(`equal for ${action} ${result}`, () => {
                expect(calculateString(`${fistNumber}${action}${secondNumber}`)).toBe(result);
            });
        });
    }

    test('equal with ()', () => {
        const fistNumber =  random(1, 9);
        const secondNumber =  random(1, 9);
        const thirdNumber =  random(1, 9);
        const result = fistNumber * (secondNumber / thirdNumber);

        expect(calculateString(`${fistNumber}•(${secondNumber}:${thirdNumber})`)).toBe(result);
    });
});
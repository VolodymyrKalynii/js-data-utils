import {random} from 'lodash';
import {generateColors} from '../colors-genarator';

describe('generateColors', () => {
    test('equal', () => {
        expect(Array.isArray(generateColors(10))).toBe(true);
    });
    test('equal2', () => {
        expect(generateColors(10).every(item => typeof item === 'string')).toBe(true);
    });
    test('equal3', () => {
        expect(generateColors(10).every(item => item.startsWith('#'))).toBe(true);
    });

    for (let i = 1; i <= 10; i++) {
        test(`length${i}`, () => {
            expect(generateColors(i).length).toBe(i);
        });
    }

    for (let i = 1; i <= 10; i++) {
        test(`unique colors behind ${i}`, () => {
            expect(generateColors(random(10 + i, 30 + i))
                .every((item, idx, arr) => item !== arr[idx - 1]))
                .toBe(true);
        });
    }

    for (let i = 1; i <= 10; i++) {
        test(`one inputColor with length: ${i}`, () => {
            const expected = generateColors(i, ['red']);

            expect(expected.length).toBe(i);
            expect(expected.every(item => item === 'red')).toBe(true);
        });
    }
});
import {getRandIndex} from '../array-utils';

describe('getRandIndex', () => {
    const arr1 = [1,2,3,4];
    const arr2 = [];

    const expected = getRandIndex(arr1);

    test('equal', () => {
        expect(expected >= 0 && expected < arr1.length).toBe(true);
    });

    test('equal empty', () => {
        expect(getRandIndex(arr2)).toBe(0);
    });
});
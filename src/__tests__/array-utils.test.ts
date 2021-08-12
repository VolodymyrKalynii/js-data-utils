import {getIndexesQty, getOrderArrForMapping, getRandIndex, makeArrayFromNumber} from '../array-utils';

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

describe('makeArrayFromNumber', () => {
    test('equal', () => {
        expect(makeArrayFromNumber(19)).toEqual([1, 9]);
    });

    test('equal', () => {
        expect(makeArrayFromNumber(1)).toEqual([1]);
    });
});

describe('getIndexesQty', () => {
    test('equal', () => {
        expect(getIndexesQty([1, 2, 3], 3)).toBe(1);
    });

    test('equal', () => {
        expect(getIndexesQty([1, 2, 3], 4)).toBe(0);
    });
});

describe('getOrderArrForMapping', () => {
    test('equal', () => {
        expect(getOrderArrForMapping(6)).toEqual([0, 1, 2, 3, 4, 5]);
    });

    test('equal', () => {
        expect(getOrderArrForMapping(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
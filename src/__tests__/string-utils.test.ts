import {upFirstLetter, checkHasStrNoExamplesSymbols} from '../string-utils';

describe('upFirstLetter', () => {
    test('equal', () => {
        expect(upFirstLetter('test')).toBe('Test');
    });
    test('not equal', () => {
        expect(upFirstLetter('test')).not.toBe('test');
    });
});

describe('checkHasStrNoExamplesSymbols', () => {
    test('equal', () => {
        expect(checkHasStrNoExamplesSymbols('t')).toBe(true);
    });

    const testValue = '1*1•1';

    test(testValue, () => {
        expect(checkHasStrNoExamplesSymbols(testValue)).toBe(false);
    });
});
import {upFirstLetter} from '../string-utils';

test('upFirstLetter', () => {
    expect(upFirstLetter('test')).toBe('Test');
});

test('upFirstLetter', () => {
    expect(upFirstLetter('1')).toBe('1');
});
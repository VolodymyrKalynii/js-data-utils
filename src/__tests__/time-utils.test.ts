import {convertSeconds, getTimeStr} from '../time-utils';

describe('convertSeconds', () => {
    test('equal', () => {
        expect(convertSeconds(90)).toEqual({minutes: 1, seconds: 30});
    });
    test('equal', () => {
        expect(convertSeconds(180)).toEqual({minutes: 3, seconds: 0});
    });
});

describe('getTimeStr', () => {
    test('equal 1:30', () => {
        expect(getTimeStr(90)).toEqual('1:30');
    });
    test('equal 3:00', () => {
        expect(getTimeStr(180)).toEqual('3:00');
    });
    test('equal 3:01', () => {
        expect(getTimeStr(181)).toEqual('3:01');
    });
});
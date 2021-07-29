import {convertSeconds, convertTimeToSeconds, getNowDateUtc, getTimeStr, getTimeStrWithTexts} from '../time-utils';

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

describe('getTimeStrWithTexts', () => {
    test('equal 1:40', () => {
        expect(getTimeStrWithTexts(100, ['min', 'sec'])).toEqual('1 min 40 sec');
    });
    test('equal 0:50', () => {
        expect(getTimeStrWithTexts(50, ['min', 'sec'])).toEqual('0 min 50 sec');
    });
    test('equal 0:50 without min', () => {
        expect(getTimeStrWithTexts(50, ['min', 'sec'], true)).toEqual('50 sec');
    });
});

describe('convertTimeToSeconds', () => {
    test('equal 1:20', () => {
        expect(convertTimeToSeconds({
            minutes: 1,
            seconds: 20
        })).toEqual(80);
    });
});

describe('getNowDateUtc', () => {
    test('equal', () => {
        const reg = /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01]) (?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/;

        expect(getNowDateUtc()).toEqual(expect.stringMatching(reg));
    });
});
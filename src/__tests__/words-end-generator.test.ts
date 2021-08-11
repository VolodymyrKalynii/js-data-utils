import {getWordEndFromNumber} from "../words-end-generator";

describe('getWordEndFromNumber', () => {
    const titles:[string, string, string] = ["минута", "минуты", "минут"];

    test('equal 1', () => {
        expect(getWordEndFromNumber(1, titles)).toBe(titles[0])
    });

    test('equal 2', () => {
        for (let i = 2; i < 4; i++) {
            expect(getWordEndFromNumber(i, titles)).toBe(titles[1])
        }
    });
    test('equal 3', () => {
        for (let i = 5; i < 11; i++) {
            expect(getWordEndFromNumber(i, titles)).toBe(titles[2])
        }
    });
});
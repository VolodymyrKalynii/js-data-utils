/**
 * Returns n-th arr elem, which depend from number
 *
 * @example
 *  titles = ["минута", "минуты", "минут"]
 *  when n = 1 returns first elem
 *  when n = 2,3,4 returns second elem
 *  when n = 5 - 9, 0 returns third elem
 *  etc...
 * @param n
 * @param titles
 */
export const getWordEndFromNumber = (n:number, titles:[string, string, string]) =>
    titles[(n % 10 === 1 && n % 100 !== 11)
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
            ? 1
            : 2];
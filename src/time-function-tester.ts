/**
 * Tests the execution time of a function over iterations of iterations
 * @example timeFunctionTest(10, () => 2+2);
 */
export const timeFunctionTest = (iterations:number, fn:Function) => {
    for (let i = 0; i < iterations; i++) {
        console.time('fn');

        fn();

        console.timeEnd('fn');
    }
};
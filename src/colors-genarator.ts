import {sample, uniq} from 'lodash';

const baseAmakidsColors = [
    '#000000',
    '#CC0000',
    '#990000',
    '#663300',
    '#990066',
    '#8E24AA',
    '#330033',
    '#333366',
    '#003366',
    '#003333',
    '#004c26',
    '#006600',
    '#009900'
];

export const generateColors = (colorsQty:number, inputColors?:Array<string>):Array<string> => {
    if (inputColors) {
        if (inputColors.length < 2) return getArr(colorsQty, inputColors);

        const uniqueEls = uniq(inputColors);

        if (uniqueEls.length < 2) return getArr(colorsQty, inputColors);
    }

    const fColors = inputColors ? [...inputColors] : [...baseAmakidsColors];

    const resultColors = [];

    for (let i = 0; i < colorsQty; i++) {
        const currentColor = sample(fColors);

        if (resultColors[i - 1] === currentColor) {
            i--;

            continue;
        }

        resultColors.push(currentColor);
    }

    return resultColors;
};

const getArr = (length:number, arr:Array<string>):Array<string> => {
    const finArr = [];
    const different = length - arr.length;

    if (different > 0) {
        finArr.push(...arr);

        for (let i = 0; i < different; i++) {
            finArr.push(sample(arr));
        }
    } else {
        finArr.push(...arr.slice(0, length));
    }

    return finArr;
};

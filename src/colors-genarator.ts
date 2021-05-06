import {getRandElem} from './array-utils';

const colors = [
    '#000',
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

export const generateColors = (colorsQty, inputColors:Array<string> = colors):Array<string> => {
    const resultColors = [];
    let prevColor = null;
    
    for (let i = 0; i < colorsQty; i++) {
        const currentColor = getRandElem(inputColors);

        if (prevColor === currentColor) {
            i--;

            continue;
        }

        resultColors.push(currentColor);

        prevColor = currentColor;
    }

    return resultColors;
};
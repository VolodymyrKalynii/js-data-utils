import {sample} from 'lodash';

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

/**
 *
 * @param colorsQty - Array<colorStr>. colorStr = hex|rgb|rgba|string
 * @param inputColors
 */
export const generateColors = (colorsQty:number, inputColors:Array<string> = colors):Array<string> => {
    const resultColors = [];
    let prevColor = null;
    
    for (let i = 0; i < colorsQty; i++) {
        const currentColor = sample(inputColors);

        if (prevColor === currentColor) {
            i--;

            continue;
        }

        resultColors.push(currentColor);

        prevColor = currentColor;
    }

    return resultColors;
};
import {random, sample} from 'lodash';

export const getRandIndex = (data:Array<any>):number => {
    const max = data.length - 1;

    if (max === -1) return 0;

    return random(max);
};

console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));
console.log(getRandIndex([]));

export const makeArrayFromNumber = (number:number):Array<number> => {
    if (!number) return [];

    return number.toString().split('').map(item => +item);
};

/**
 * Returns an array of element indexes if they are in arr
 * @param arr
 * @param elem
 */
export const getIndexes = (arr:Array<string|number>, elem:string|number) => {
    const indexes = [];

    arr.forEach((item, index) => {
        if (item === elem)
            indexes.push(index);
    });

    return indexes;
};

export const getIndexesQty = (arr:Array<string|number>, elem:string|number) =>
    getIndexes(arr, elem).length;

const compareRandomArr = () => Math.random() - 0.5;

export const getOrderArrForMapping = (n):Array<number> => {
    const arr = [];

    for (let i = 0; i < n; i++)
        arr.push(i);

    return arr;
};

// Returns a random element of the entire array, except for the passed indices
export const getUniqueRndElem = (arrayOfElements:Array<any>, unwantedKeys:Array<number>):number => {
    const keysToPass = [];

    for (let i = 0; i < arrayOfElements.length; i++) {
        !unwantedKeys.includes(i) && keysToPass.push(i);
    }

    return sample(keysToPass);
};

// Returns N random elements of the entire array, except for the passed indices
export const getNUniqueRndElems = (n:number, arrayOfElements:Array<any>, unwantedKeys:Array<number> = []):Array<number> => {
    const newUnwantedKeys = [...unwantedKeys];
    const resultArr = [];

    for (let i = 0; i < n; i++) {
        const newUniqueElement = getUniqueRndElem(arrayOfElements, newUnwantedKeys);
        
        resultArr.push(newUniqueElement);

        newUnwantedKeys.push(newUniqueElement);
    }

    return resultArr;
};

// Returns the indices of the passed elements in the passed array
export const indexesOfItems = (items:Array<number>, cardsArray:Array<any>):Array<number> => 
    items.map(item => cardsArray.indexOf(item));


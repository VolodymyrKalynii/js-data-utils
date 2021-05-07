import {cloneDeep} from 'lodash/cloneDeep'
import {getRandInteger} from './math-utils';

export const getUniqueElements = <T>(arr:Array<T>):Array<T> => Array.from(new Set(arr));

export const findUniqueElements = <T>(arr:Array<T>, arr1:Array<T>):Array<T> =>
    arr.filter((obj) =>
        arr1.indexOf(obj) < 0
    );

export const findSimilarElements = <T>(arr:Array<T>, arr1:Array<T>):Array<T> =>
    arr.filter((obj) =>
        arr1.indexOf(obj) >= 0
    );

export const compareArrays = (array1:Array<any>, array2:Array<any>):boolean => (
    array1.length === array2.length && array1.sort().every((value, index) => value === array2.sort()[index])
);

export const getRandIndex = (data:Array<any>):number => {
    const max = data.length - 1;

    return getRandInteger(max);
};

/**
 * Returns an array clone.
 * If any of the elements of the array has a complex type - automatically does deep cloning.
 * @param arr
 * @param deep - set true if deep cloning is required immediately
 */
export const getArrClone = <T>(arr:Array<T>, deep = false):Array<T> => {
    if (!arr) {
        console.log('arr', arr);

        throw new Error('Arr in undefined');
    }

    const needDeep = deep
        ? true
        : arr.some((item:any) =>
            !(typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean' || item === undefined || item === null)
        );

    return needDeep ? cloneDeep(arr) : arr.slice();
};

export const getRandElem = <T>(arr:Array<T>):T =>
    arr[getRandInteger(arr.length - 1)];

export const mixElems = <T>(arr:Array<T>):Array<T> => {
    const arrMixed = getArrClone(arr);
    const arrMixedLength = arrMixed.length;

    if (!arr.length)
        throw new Error('Array is empty');

    if (arrMixedLength === 1) return arrMixed;

    if (arrMixedLength < 80) {
        return arrMixed.sort(compareRandomArr);
    }

    const maxCyclesNum = Math.min(arrMixedLength * 10, 5000);

    let counter = 0;
    let cycleNum = 0;

    do {
        counter = 0;

        cycleNum++;

        if (cycleNum > maxCyclesNum) {
            console.warn('Failed to mix elems.');

            return arrMixed;
        }

        for (let i = arrMixedLength - 1; i > 0; i--) {
            const num = Math.floor(Math.random() * (i + 1));
            const d = arrMixed[num];

            arrMixed[num] = arrMixed[i];

            arrMixed[i] = d;
        }

        for (let i = 0; i < arrMixedLength; i++)
            if (arrMixed[i] === arr[i]) counter++;

    } while (counter === arrMixedLength);

    return arrMixed;
};

export const getArrCloneSortedByNumbers = (arr:Array<number|string>):Array<number|string> => {
    const sortedArr = getArrClone(arr);

    sortedArr.sort(compareNumeric);

    return sortedArr;
};

const compareNumeric = (a, b) => (+a == +b) ? 0 : ((+a > +b) ? 1 : -1);

export const makeArrayFromNumber = (number:number):Array<number> => {
    if (!number) return [];

    return number.toString().split('').map(item => +item);
};

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

// Возвращает рандомный элемент всего массива, кроме переданных индексов
export const getUniqueRndIndex = (arrayOfElements:Array<any>, unwantedKeys:Array<number>):number => {
    const keysToPass = [];

    for (let i = 0; i < arrayOfElements.length; i++) {
        !unwantedKeys.includes(i) && keysToPass.push(i);
    }

    return getRandElem(keysToPass);
};

// Возвращает N рандомных элементов всего массива, кроме переданных индексов
export const getNUniqueRndIndexes = (n:number, arrayOfElements:Array<any>, unwantedKeys:Array<number> = []):Array<number> => {
    const newUnwantedKeys = [...unwantedKeys];
    const resultArr = [];

    for (let i = 0; i < n; i++) {
        const newUniqueElement = getUniqueRndIndex(arrayOfElements, newUnwantedKeys);
        
        resultArr.push(newUniqueElement);

        newUnwantedKeys.push(newUniqueElement);
    }

    return resultArr;
};

// Возвращает индексы переданных элементов в переданном массиве
export const indexesOfItems = (items:Array<number>, cardsArray:Array<any>):Array<number> => 
    items.map(item => cardsArray.indexOf(item));


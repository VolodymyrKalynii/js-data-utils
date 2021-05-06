export const getRandInteger = (max:number):number =>
    Math.round(Math.random() * max);

export const getRandIntegerWithMin = (min:number, max:number):number => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);

    return parseInt(Math.round(rand).toString());
};

export const round10 = (value:number):number =>
    Math.round(value / 10) * 10;

export const getRandNumber = ():number => parseInt(Math.random().toString().slice(2));

export const getRandIndexList = (data:any):number => {
    const max = data.size - 1;

    return getRandInteger(max);
};

/**
 * Returns a random value of a given bit rate
 */
export const getNthDimensionNumber = (dimension:number) => {
    const minFrame = Math.pow(10, dimension - 1);
    const maxFrame = Math.pow(10, dimension) - 1;

    return getRandIntegerWithMin(minFrame, maxFrame);
};

export const getRandFromFifthPercents = () => getRandIntegerWithMin(0, 1);

/**
 * returns the result of calculations from the str
 * str: 1+1+1| 2-1-2 | 6/3*2| 2•2•2| 2:2•2| ...
 * tested for actions^ * / + -
 */
export const calculateString = (str:string) => {
    const sum_or_diff = function (sub, a, sign, b) {
        return sign == '-' ? a - b : +a + +b;
    };
    const mult_or_div = function (sub, a, sign, b) {
        return sign == '*'|| sign =='•' ? a * b : a / b;
    };
    const power = function (sub, a, b) {
        return Math.pow(a, b);
    };
    const match_power = /(-?[\d\.]+)\s*\^\s*(-?[\d\.]+)/g;
    const match_mult_div = /(-?[\d\.]+)\s*([*•:\/])\s*(-?[\d\.]+)/g;
    const match_sum_diff = /(-?[\d\.]+)\s*([+-])\s*(-?[\d\.]+)/g;

    const get_value = function (sub, exp) {
        while (exp.indexOf('^') !== -1)
            exp = exp.replace(match_power, power);
        while (match_mult_div.test(exp))
            exp = exp.replace(match_mult_div, mult_or_div);
        while (match_sum_diff.test(exp))
            exp = exp.replace(match_sum_diff, sum_or_diff);
        return exp;
    };
    while (str.indexOf('(') !== -1) // убираем скобки
        str = str.replace(/\(([^\(\)]*)\)/g, get_value);

    return parseInt(get_value('', str));
};
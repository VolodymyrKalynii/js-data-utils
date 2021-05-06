export const convertSeconds = (inputSeconds:number):{
    minutes:number,
    seconds:number
} => ({
    minutes: Math.floor(inputSeconds / 60),
    seconds: Math.round(inputSeconds % 60)
});

export const getTimeStr = (inputSeconds:number):string => {
    const inputNumberMinutes = Math.floor(inputSeconds / 60);
    let inputNumberSeconds:number|string = inputSeconds % 60;

    if (inputNumberSeconds === 0) inputNumberSeconds = '00';
    else if (inputNumberSeconds < 10) inputNumberSeconds = '0' + inputNumberSeconds;

    return inputNumberMinutes + ':' + inputNumberSeconds;
};

export const getTimeStrWithTexts = (inputSeconds:number, texts:Array<string>, noZeroMinutes = false):string => {
    const [min, sec] = texts;
    const inputNumberMinutes = Math.floor(inputSeconds / 60);
    let inputNumberSeconds:number|string = inputSeconds % 60;

    if (inputNumberSeconds === 0) inputNumberSeconds = '00';
    else if (inputNumberSeconds < 10) inputNumberSeconds = '0' + inputNumberSeconds;

    const minutesText = inputNumberMinutes > 0
        ? `${inputNumberMinutes} ${min} `
        : noZeroMinutes
            ? ''
            : `${inputNumberMinutes} ${min} `;

    return minutesText + inputNumberSeconds + ' ' + sec;
};

export const convertTimeToSeconds = (time:{
    minutes:number,
    seconds:number
}):number => time.minutes * 60 + time.seconds;

export const getNowDateUtc = ():string => {
    const date = new Date();

    const currentYear = date.getUTCFullYear();
    const currentMonth = addZero(date.getUTCMonth() + 1);
    const currentDate = addZero(date.getUTCDate());
    const currentHours = addZero(date.getUTCHours());
    const currentMinutes = addZero(date.getUTCMinutes());
    const currentSeconds = addZero(date.getUTCSeconds());

    return `${currentYear}-${currentMonth}-${currentDate} ${currentHours}:${currentMinutes}:${currentSeconds}`;
};

const addZero = (input) => input >= 10 ? input : '0' + input;
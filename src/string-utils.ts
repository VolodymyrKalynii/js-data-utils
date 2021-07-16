export const upFirstLetter = (str:string):string => {

    return str[0].toUpperCase() + str.slice(1);
};

export const camelToKebab = (string:string):string =>
    string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const checkHasStrNoExamplesSymbols = (str:string) =>
    str.match(/[^0-9:/+=• ()\n*\-]/g);
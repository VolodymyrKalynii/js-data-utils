export const upFirstLetter = (str:string):string => str[0].toUpperCase() + str.slice(1);

export const checkHasStrNoExamplesSymbols = (str:string) =>
    str.match(/[^0-9:/+=• ()\n*\-]/g);
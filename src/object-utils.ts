export const freezeDeep = <T>(obj:T):T => {
    const propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(name => {
        const prop = obj[name];

        if (typeof prop === 'object' && prop !== null)
            freezeDeep(prop);
    });

    return Object.freeze(obj);
};

export const getRndPop = <T>(obj:{[key:string]:T}):T => {
    const rndPropNumber = Math.floor( Math.random() * (Object.keys(obj).length));
    const res = Object.keys(obj);

    return obj[res[rndPropNumber]];
};
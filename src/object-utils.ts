export const freezeDeep = <T>(obj:T):T => {
    const propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(name => {
        const prop = obj[name];

        if (typeof prop === 'object' && prop !== null)
            freezeDeep(prop);
    });

    return Object.freeze(obj);
};

export const mergeObjects = (obj1, obj2) => {
    const objects = [obj1, obj2];

    return objects.reduce(function(r, o) {
        Object.keys(o).forEach(function(k) {
            r[k] = o[k];
        });

        return r;
    }, {});
};

export const getRndPop = (obj) => {
    const rndPropNumber = Math.floor( Math.random() * (Object.keys(obj).length));
    const res = Object.keys(obj);

    return obj[res[rndPropNumber]];
};
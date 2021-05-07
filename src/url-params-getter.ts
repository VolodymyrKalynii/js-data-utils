type R = { [key:string]:any };

export const getUrlParams = (window:Window):R =>
    window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce((p, e) => {
            const a = e.split('=');

            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);

            return p;
        }, {});
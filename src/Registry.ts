export class Registry {
    static store = {};

    static add(key, val:any) {
        if (Registry.store.hasOwnProperty(key))
            throw new Error('Forbidden to overwrite registry data.');

        Registry.store[key] = val;
    }

    static get(key) {
        return Registry.store[key];
    }

    static delete(key) {
        if (!Registry.store.hasOwnProperty(key)) return;

        delete Registry.store[key];
    }
}
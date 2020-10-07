export class RAE {
    constructor() {
        this.listeners = {};
    }

    registerEventHandlers(el, type, fn, options) {
        if (!this.listeners[type])
            this.listeners[type] = [];

        this.listeners[type].push(fn);
        return el.addEventListener(type, fn, options);
    }

    removeAllEventHandlers(el, type) {
        if (!this.listeners[type] || !this.listeners[type].length)
            return;

        for (let i = 0; i < this.listeners[type].length; i++)
            el.removeEventListener(type, this.listeners[type][i]);
    }
}


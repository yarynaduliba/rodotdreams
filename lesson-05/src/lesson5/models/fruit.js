export class Fruit {
    #name;
    color;
    sweetness;

    get name() {
        return this.#name.toLocaleLowerCase;
    }

    set name(value) {
        this.#name = value.toLocaleUpperCase;
    }

    logInfo() {
        console.log(this._name, this._color, this.sweetness);
    }
};

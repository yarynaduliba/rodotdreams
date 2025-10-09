import { Fruit, Vegetable } from "./models/index.js";
const apple = {
    _name: 'apple',
    _color: 'red',
    _sweetness: 10,

    get name() {
        return this._name.toLocaleUpperCase(
        );
    },

    set name(value) {
        this._name = value.toLocaleUpperCase();
    },

    get color() {
        return this._color;
    }


};

console.log(apple.name);
apple.name = 'Apple Red';
console.log(apple.name);


// class Fruit {
//     #name;
//     color;
//     sweetness;

//     get name() {
//         return this.#name.toLocaleLowerCase;
//     }

//     set name(value) {
//         this.#name = value.toLocaleUpperCase;
//     }

//     logInfo() {
//         console.log(this._name, this._color, this.sweetness)
//     }
// };

const banana = new Fruit();
banana.color = 'red';

const carrot = new Vegetable('carrot', 'orange', 5);
carrot.color = 'red';
carrot.name = 'dfs';
console.log(carrot.name);


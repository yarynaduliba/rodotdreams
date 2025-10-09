const someObject = {
    _name: 'Yaryna',
    _age: 30,
    _color: 'red',
    _address:  {
        city: 'Kyiv',
        street: 'Naberezhna'
    },

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    },

    get age() {
        return this._age;
    },

    set age(value) {
        this._age = value;
    },

    get city() {
        return this._address.city;
    },

    set city(value) {
        this._address.city = value;
    },

    get street() {
        return this._address.street;
    },

    set street(value) {
        this._address.street = value;
    },

    logInfo() {
        console.log('My name is: ' + this._name +
        '. My age is: ' + this._age +
        '. My favorite color is: ' + this._color +
        '. My city is: ' + this._address.city +
        '. My street is: ' + this._address.street);
    },

    logInfo2(name, age, color, city, street) {
        return console.log('My name is: ' + name +
        '. My age is: ' + age +
        '. My favorite color is: ' + color +
        '. My city is: ' + city +
        '. My street is: ' + street);
    },
    summary() {
        return `Name: ${this._name}, Age: ${this._age}, Favorite color: ${this._color}, Lives in ${this._address.city} on ${this._address.street}`;
    }
};

someObject.name = 'Katya';
someObject.age = '35';
someObject.city = 'Ivano-Frankivsk';
someObject.logInfo();
someObject.logInfo2('Taras', 29, 'Green', 'Lviv', 'Lypy');
console.log(someObject.summary());


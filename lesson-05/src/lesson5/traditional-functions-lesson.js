function sumAny(a, b) {
    return a + b;
}
const result = sumAny(3, 5);
const result2 = sumAny(2, 7);

console.log(result, result2);

function logArrayValues(arr) {
    console.log(arr);
    if (!Array.isArray(arr)) {
        return; //просто виходить
    }
    arr.forEach(element => {
        console.log(element);
    });
}

function logArrayValues2(arr, type) {
    if (!Array.isArray(arr)) {
        return; //просто виходить
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr; //якщо є тип - ми фільтруємо,
    // якщо немає типу - нефільтруємо

    resultingArray.forEach(element => {
        console.log(element);
    });
}

const arr1 = [1, 3, 5];
const arr2 = ['2', '4', '6'];

logArrayValues(arr1);
logArrayValues(arr2);
logArrayValues(1);

export function filterArrayByType(arr, type) {
    return arr.filter(item => typeof item === type);
}

const anyArray = [1, '2', true, {age: 23}];

console.log(filterArrayByType(anyArray, 'string'));
console.log(filterArrayByType(anyArray, 'boolean'));

console.log('--------------------');
logArrayValues2([...anyArray, ...[6, 'true', false]]);
console.log('--------------------');
logArrayValues2([...anyArray, ...[6, 'true', false]], 'string');
console.log('--------------------');
logArrayValues2([...anyArray, ...[6, 'true', false]], true);
console.log('--------------------');
logArrayValues2(arr1, 'string');

console.log('--------------------');

class SomeClass {
    name;
    surName = 'SurName';

    constructor() {
        this.name = 'SomeClass';
    }

    logInfo() {
        console.log(this.name, this.surName);
        console.log(this);
    }

    logAnotherinfo = () => {
        console.log(this);
    };
}

const obj = new SomeClass();
obj.logInfo();
console.log('______________');
obj.logAnotherinfo();


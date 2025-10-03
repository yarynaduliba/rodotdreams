const stringArray = ['a', 'b', 'c', 'd'];
stringArray.push('5');
console.log(stringArray);
const adding = stringArray.map(value => value + 'y');
console.log(adding);

stringArray.forEach(value => {
    console.log(value + 'y');
});


const numberArray = [5, 2, 7, 8, 9, 3, 6];
const element = numberArray.pop();
console.log(element, numberArray, numberArray.length);

const double = numberArray.map(num => num * 2);
console.log(double);

numberArray.forEach(num => {
    console.log(num * 2);
});

const sumOfAllElements = numberArray.reduce ((iterator, currentValue) => {
    return iterator + currentValue;
});
console.log(sumOfAllElements);


const booleanArray = [true, false, false, true, true];
const quantity = booleanArray.reduce((quan) => {
    return quan + 1;
}, 0);
console.log(quantity);

const mapping = booleanArray.map((value) => {
    if (value == true) {
        return value + 3;
    }
});
console.log(mapping);

booleanArray.forEach((value, index) => {
    if (value == false) {
        console.log(index);
    }
});


const mixedArray = ['apple', 5, false, {name: 'Yaryna', age: 29}, [2, 5, 7, 9]];
const resultValue = mixedArray.map((value, index) => {
    if (index === 3) {
        return value;
    }
});
console.log(resultValue);

const resultIndex = mixedArray.map((value, index) => {
    if (index < 1) {
        return value;
    }
});
console.log(resultIndex);

mixedArray.forEach((value, index) => {
    if (index < 5) {
        console.log('Index: ' + index, 'Value: ' + value);
    }
});



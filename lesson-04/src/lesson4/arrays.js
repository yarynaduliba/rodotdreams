const arr = [];
arr.push('1');
arr.push(2);
arr.push(true);

console.log(arr, arr.length);
console.log(arr[0], arr[1], arr[2]);

arr[1] = 'changed value';
console.log(arr);

const element = arr.pop();
console.log(element, arr, arr.length);

arr.push(1);
arr.push({a: 1, b: 2});
arr.push(3);
arr.push(true);
arr.push('5');

const filteredArray = arr.filter((item) => typeof item === 'string');
const foundElement = arr.find((item) => typeof item === 'string');
console.log(filteredArray);
console.log(foundElement);

console.log('---------');
const sortedArray = [1, 5, 2, 9, 3, 7, 4].sort((a, b) => a - b);
console.log(sortedArray);

//reduce

const sum = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
console.log(sum);


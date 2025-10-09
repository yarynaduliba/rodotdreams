import { filterArrayByType } from './traditional-functions-lesson.js';

const logArrayValues2 = (arr, type) => {
    if (!Array.isArray(arr)) {
        return; //просто виходить
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr; //якщо є тип - ми фільтруємо,
    // якщо немає типу - нефільтруємо

    resultingArray.forEach(element => {
        console.log(element);
    });
};

console.log('--------------------');
logArrayValues2([...[1, '2', true], ...[6, 'true', false]]);
console.log('--------------------');
logArrayValues2([...[3, '6', true], ...[6, 'true', false]], 'string');
console.log('--------------------');
logArrayValues2([...[false, '2', true], ...[6, 'true', false]], true);
console.log('--------------------');

const sum = (a, b) => a + b; // стрілкові функції використовується таке, що
//пишеться в один рядок
console.log(sum(1, 3));

const extract = (a, b) => a - b;
function exract2(a, b) {
    return b - a;
}

const numbers = [1, 3, 6, 8];
numbers.sort((a, b) => a - b);
numbers.sort(extract);
console.log(numbers);

numbers.sort(exract2);
console.log(numbers);

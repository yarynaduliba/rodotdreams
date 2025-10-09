import { filterArrayByType } from './traditional-functions-lesson.js';

const logArrayValues2 = function(arr, type) {
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

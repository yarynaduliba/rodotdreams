for (let i = 0; i < 10; i ++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    }
}

console.log('------------');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) { - старе
//     console.log(arr[i]);
// }

// for (const value of arr) {
//     if (value === 2) {
//         continue;
//     } else if (value === 4) {
//         break;
//     }
//     console.log(value);
// }

// for (const value of arr) {
//     if (value < 3) {
//         console.log('skipped index, ', arr.indexOf(value));
//         continue;
//     } else if (value === 7) {
//         break;
//     }
//     console.log(value);
// }

// let iterator = -1;
// while (iterator < 10 ) {
//     if (iterator === 2) {
//         continue;
//     } else if (iterator === 7) {
//         break;
//     }
//     console.log(iterator);
//     iterator++;
// }
// console.log('--------------');

const outerObject = [];
// arr.forEach((value, index) => {
//     if (index < 5) {
//         return;
//     }
//     outerObject.push(value);
//     console.log(value);
// });

console.log(outerObject);

console.log('-------map------');
const map = arr.map((value, index) => {
    if (index >= 5) {
        return value;
    }
    // return value;
}).filter((value) => value);
console.log(map);

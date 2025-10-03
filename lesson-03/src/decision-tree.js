const a = 2;
const b = 3;
const c = '3';

if (a > b) {
    console.log('a is bigger than b');
} else if (b > a) {
    console.log('b is bigger than a');
} else {
    console.log('They are equal');
}

if (a < b && b === c) {
    console.log('a < b and c');
} else if (a < b && b == c) {
    console.log('a < b and b == c');
} else {
    console.log('nothing');
}

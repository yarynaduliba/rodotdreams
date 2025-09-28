const a = 1;
const b = 2;
const c = '6';

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b && c == 6) {
    console.log('a > b');
} else if (a < b && c == 6) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b || c > 6) {
    console.log('a > b && c == 6');
} else if (a < b && typeof c === 'number') {
    console.log('a < b && typeof c == string');
} else {
    console.log('non of the condition are true');
}

console.log('скорочений запис');
const d = typeof c === 'number' ? 'c is number' : 'c is not number';
console.log(d, typeof d);

const e = typeof c === 'number' ? c : Number(c);
console.log(e, typeof e);

console.log({a: '1'} + {b: 2}, typeof ({a: '1'} + {b: '2'}));


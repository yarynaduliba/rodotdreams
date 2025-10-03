const a = 5;
const b = '5';
const c = undefined;

console.log(a > b && b <= c);
console.log(a <= b || c == 0);
console.log(a == b);
console.log(a === b);
console.log(a !== b);

const d = c ?? 'another';
console.log(d);



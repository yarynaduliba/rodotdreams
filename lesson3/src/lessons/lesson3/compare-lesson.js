let a = 2;
let b = '2';
let c = true;

//== → намагається зробити значення однакового типу перед порівнянням.
console.log(a == b);
console.log(a == c);
console.log(a != b);
console.log(a != c);
console.log('-------з приведенням типів ------');
//=== → одразу порівнює тип і значення без приведення.
console.log(a === b);
console.log(a === c);
console.log(a !== b);
console.log(a !== c);

a = 2;
b = '3';
c = false;

console.log('-------порівняння з приведенням типів ------');
console.log(a > b);
console.log(a > c);
console.log(a < b);
console.log(a < c);

console.log(a >= b);
console.log(a >= c);
console.log(a <= b);
console.log(a <= c);

console.log('--------порівняння рядків------');
a = 'str1';
b = 'str2';

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//по одному циклу проходу від 0 до 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('----------------');

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('----------------');

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
console.log('----------------');

//по одному циклу від 100 до 0 з кроком 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}
console.log('----------------');

let k = 100;
while (k >= 0) {
    console.log(k);
    k -= 10;
}
console.log('----------------');
let l = 100;
do {
    console.log(l);
    l -= 10;
} while (l >= 0);

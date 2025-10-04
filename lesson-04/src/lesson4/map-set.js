const set = new Set(); //список без повторень - відфільтрований масив - лише значення, без ключів
set.add(1);
set.add('2');
set.has(3) ? set.delete(3) : set.add(3);
const entries = set.entries();
console.log(entries);

const values = set.values();
console.log(values, Array.from(values)); //вивести всі значення

const arr  = [1, 2, 3, 1, 3, 5, 7, 2];
const set2 = new Set(arr);
console.log(Array.from(set2.values()));


const map = new Map(); //зберігає ключ значення
map.set('1', 1);
map.set(1, '2');
map.set(4, {a: 1, b: 2});
map.set('3', 3);
map.has('3') ? map.delete('3') : map.set('3', {a: 1});  //якщо є 3, видали його, якщо немає - запиши
[{'1' : 1}, {2: '2'}, {3: {a: 1, b: 2}}];
if (map.has('3')) {
//логіка перевірки
}

const mapEntries = map.entries();
const someValue = map.get('1');
const keys = Array.from(map.keys());
console.log(someValue);
console.log(keys, map.keys(), mapEntries);

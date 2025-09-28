const a = 3;
const b = '5';
const d  = undefined;

//завжди порівнюють булеві значення,якщо тип не булевий - приводять до булевого
//logical AND
console.log(a > b && b >= 5);
console.log(a < b && b >= 5);

//logical OR
console.log(a > b ||  b >= 5);
console.log(a < b || b >= 5);
console.log((a < b || b >= 5) && true);

//logical NOT
console.log(!(a > b));
console.log(!(a < b));

//Він перевіряє: якщо d дорівнює null або undefined, тоді візьме значення праворуч ('another')
//Якщо ж d має будь-яке інше значення (навіть 0, false, порожній рядок ""), тоді використається саме d
const c = d ?? 'another';
console.log(c);

const obj = {}; // створили область в пам'яті ПК #87yt64re43ew

obj.key1 = 'val1';
obj['key2'] = 'val2';
obj['key3 with space'] = 'val3 with saces';
obj.key4 = {
    subkey1: 1,
    subkey2: '2',
    subkey3: true,
    subkey4: []
};

console.log(obj);
console.log(JSON.stringify(obj));

const wantedCopy = obj; // ми присвоїли посилання на пам'ять об'єкту obj новому об'єкту -> #87yt64re43ew
wantedCopy.key1 = 1;
console.log(obj, wantedCopy);

const singleLevelCopy = {...obj }; // Це так званий shallow copy (поверхнева копія).
// Створюється новий об’єкт з усіма властивостями верхнього рівня obj.
// Але якщо серед властивостей є вкладені об’єкти/масиви, то вони все одно копіюються за посиланням.
singleLevelCopy.key2 = 'changed value in copied object';
console.log('---single level copy----');
console.log(obj, singleLevelCopy);

const deepCopy = structuredClone(obj);
const deepCopyWithoutDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subkey3 = 'changed nested prop for deep copy demo';
deepCopyWithoutDoubleConversion.key4.subkey3 = 'changed nested prop for deep copy with double conversion demo';

console.log('----deep copy----');
console.log(obj, deepCopy, deepCopyWithoutDoubleConversion);

/*
= → не копія, а лише ще одна змінна з тим самим посиланням.
{...obj} → поверхнева копія (тільки верхній рівень незалежний).
structuredClone(obj) → глибока копія (повністю незалежний об’єкт).
:
structuredClone → сучасний і надійний спосіб для реальної глибокої копії.
JSON.parse(JSON.stringify(...)) → хак, який підходить лише для простих об’єктів без Date,
Map, Set, undefined, функцій і циклічних посилань.
*/

console.log('\n----виведення ключів-----');
const objKeys = Object.keys(obj); //виведення одновимірні ключі
const objValues = Object.values(obj); //виведення значень
const objEntries = Object.entries(obj); // виведення масиву масивів, значення з ключами
console.log(objKeys, objValues, objEntries);

console.log(Object.keys(obj.key4));

const objWithMethod = structuredClone(obj);
objWithMethod.objWithMethod = function () {
    console.log('objWithMethod');
    console.log(this);
    console.log(this.key1);
};

objWithMethod.objWithMethod();

function objectConsructor(name, prop) {
    this.name = name;
    this.prop = prop;
}

const objFromConstructor = new objectConsructor('name', {key: 'value'});
console.log(objFromConstructor);


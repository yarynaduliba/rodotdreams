//  if (перевірка 1) {
//      дія 1
// } else if (перевірка 2) {
//      дія 2
// } else {
//      дія 3
// }
// Перевірка на повне співпадіння === 'значення'
//
const a = 5;
switch (a) {
    case 1:
        console.log('a === 1');
        break;
    case 2:
        console.log('a === 2');
        break;
    case 5:
        console.log('a === 5');
        break;
    default:
        console.log('non of the conditions above');
}

const b = 5;
switch (b) {
    case 1: {
        console.log('a === 1');
        break;
    }
    case 2:
        console.log('a === 2');
        break;
    case 5:
        console.log('a === 5');
        break;
    default:
        console.log('non of the conditions above');
}

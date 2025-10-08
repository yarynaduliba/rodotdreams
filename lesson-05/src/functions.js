const arrayNumbers = [1, 3, 5, 7];
const arrayLetters = ['a', 'b', 'c', 'd'];

function arrayAction (arr) {
    if (typeof arr[0] === 'number') {
        const sum =  arr.reduce((acc, currentValue) => acc + currentValue, 0);
        return console.log(sum);
    }

    if (typeof arr[0] === 'string') {
        const sum = arr.reduce((acc, currentValue) => acc + currentValue, '');
        return console.log(sum);
    }
}

arrayAction(arrayNumbers);
arrayAction(arrayLetters);

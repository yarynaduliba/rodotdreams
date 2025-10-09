const arrayNumbers = [1, 3, 5, 7];
const arrayLetters = ['a', 'b', 'c', 'd'];

const arrayAction = (arr) => {
    return console.log(arr.reduce((acc, currentValue) => acc + currentValue));

};

arrayAction(arrayNumbers);
arrayAction(arrayLetters);

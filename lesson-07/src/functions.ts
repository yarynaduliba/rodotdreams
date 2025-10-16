const arrayNum: number[] = [1, 3, 5, 7];
const arrayLet: string[] = ['a', 'b', 'c', 'd'];
const arrayEmpty: string[] = [];

function arrayAction (arr: number[] | string[]): void {

    if (arr.length === 0) {
        console.log('Array is empty');
    } else if (typeof arr[0] === 'number') {
        const sum =  (arr as number[]).reduce((acc, currentValue) => acc + currentValue, 0);
        console.log(sum);
    } else {
        const sum = (arr as string[]).reduce((acc, currentValue) => acc + currentValue, '');
        console.log(sum);
    }
}

arrayAction(arrayNum);
arrayAction(arrayLet);
arrayAction(arrayEmpty);


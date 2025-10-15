const arrayNumbers: number[] = [1, 3, 5, 7];
const arrayLetters: string[] = ['a', 'b', 'c', 'd'];
const arrayEmpty2: string[] = [];

const arrayAction2 = (arr: string[] | number[]): string | number | undefined => {

    if (arr.length === 0) {
        console.log('Array is empty');
        return undefined;
    } else if (typeof arr[0] === 'number') {
        const sum = (arr as number[]).reduce((acc, currentValue) => acc + currentValue, 0 );
        console.log(sum);
        return sum;
    } else {
        const sum = (arr as string[]).reduce((acc, currentValue) => acc + currentValue, '');
        console.log(sum);
        return sum;
    }

};

arrayAction2(arrayNumbers);
arrayAction2(arrayLetters);
arrayAction2(arrayEmpty2);

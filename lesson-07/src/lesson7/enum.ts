export enum Dirrection {
    Up,
    Down,
    Left = 'Left',
    Right = 'Right'
}

console.log(Dirrection.Left);
console.log(Dirrection[0]);

const testContext: Partial<Record<Dirrection, unknown>> = {};

testContext[Dirrection.Right] = {a: 1, b: 2};
testContext['Left' as Dirrection] = { direction: 'left'};

console.log(testContext.Right, testContext.Left);



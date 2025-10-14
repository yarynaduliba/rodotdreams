let counter = 0;

async function incrementCounter() {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
    const localValue = counter;
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
    counter = localValue + 1;
    console.log(`Incremented counter: ${counter}`);

    return counter;
}

async function simulateRaceCondition() {
    console.log('initial counter: ', counter);
    const tasks1 = incrementCounter();
    const tasks2 = incrementCounter();
    const tasks3 = incrementCounter();
    const tasks4 = incrementCounter();

    await Promise.all([tasks1, tasks2, tasks3, tasks4]);

    console.log('Final counter value: ', counter);

}

simulateRaceCondition();

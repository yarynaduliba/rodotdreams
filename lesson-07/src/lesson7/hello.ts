const c = 3;
console.log(c);

function hello(param: string): void {
    console.log(`Hello, ${param}`);
}

hello('world');
hello((4).toString());
hello(['str1', 'str2'].join(', '));

function calcAdd(a: number, b: number): number {
    return a + b;
}

function calcAdd2(a: number | string, b: number | string ): number {
    const normalizedA = typeof a === 'string' ? parseFloat(a) : a;
    const normalizedB = typeof b === 'string' ? parseFloat(b) : b;
    return normalizedA + normalizedB;
}
const result = calcAdd(1, 2);
console.log(result);

console.log(calcAdd2(5, 7));

(async () => {
    const resp1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const resp2 = await fetch('https://api.restful-api.dev/objects');

    async function checkStatus(response: Response): Promise<unknown> {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    }

    async function getResult(): Promise<Record<string, string | number | boolean>> {
        return (await checkStatus(resp1)) as Record<string, string | number | boolean>;
    }

    async function getResult2(): Promise<Record<string, number>> {
        return (await checkStatus(resp2)) as Record<string, number>;
    }

    const json1 = await getResult();
    const json2 = await getResult2();
    console.log(json1, json2);

    async function checkStatusGeneric<T>(response: Response): Promise<T> {
        if (response.ok) {
            return (await response.json()) as T; // JSON.parse(parse) as {a: string, b: number}
        }
        throw new Error(response.statusText);
    }

    const json3 = await checkStatusGeneric<Record<string, string>>(resp1);
    console.log(json3);
})();

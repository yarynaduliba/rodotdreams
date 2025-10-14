async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();

    return json;
}


(async () => {
    console.log('before start');
    const response = await getData();
    console.log(response);
    console.log('after start');

})();

let response;
try {
    response = await getData();
} catch (e) {
    console.log(e);
    response = {};
}
console.log(response);

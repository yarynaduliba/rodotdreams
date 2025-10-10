async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response, response.ok, response.status);
    const json = await response.json();
    return json;
}

(async () => {
    const response = await getData();
    console.log(response);
})();



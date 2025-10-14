fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response, response.ok, response.status);
        return response.json();
    })
    .then(json => console.log(json)) //запиши результат виконання в змінну джейсон
    .catch(e => console.log(e)); // якщо зявиться якась ерора - виведи її


function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log(response, response.ok, response.status);
            return response.json();
        })
        .then(json => processData(json)) //запиши результат виконання в змінну джейсон
        .catch(e => console.log(e)); // якщо зявиться якась ерора - виведи її
}

function processData(json) {
    console.log('trying to process our JSON');
    console.log(json);
}

getData();

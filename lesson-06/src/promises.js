function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log(response, response.ok, response.status);
            return response.json();
        })
        .then(json => processData(json))
        .catch(e => console.log(e));
}

function processData(json) {
    console.log('Process JSON');
    console.log(json);
}

getData();


function error() {
    throw new Error('Status is not 200');
}

async function sendAPIRequest() {
    console.log('sending API request...');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos1');
        if (!response.ok) {
            error();
        }
        const responseJson = await response.json();
        console.log('Primary request succeeded');
        return responseJson;
    } catch (e) {
        console.log(e.message);
        try {
            console.log('Trying backup');
            const backupResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!backupResponse.ok) {
                error();
            }
            const backupResponseJson = await backupResponse.json();
            console.log('Backup Request succeeded');
            return backupResponseJson;
        } catch (backupError) {
            console.log(backupError.message);
            throw new Error('Both failed');
        }
    }
}

(async () => {
    try {
        const result = await sendAPIRequest();
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
})();

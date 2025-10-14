function sendAPIRequest(resource) {
    throw new Error(`Error: the 1 program was not able to fetch resource ${resource}`);
}

function sendBackupApiRequest(resource) {
    return {
        resource: resource,
        result: 'success',
        status: 200
    };
}

function sendImprovisedApiRequest() {
    console.log('sending API request...');

    //знайти ресурс який використовує джейсон
    //перший посилаєте, потім перевіряєте чи респонс ок, якщо не ок - шлете інший ресурс
    //якщо статус 404 - кидаєте throw error
    //
    //if response.status != 200
    //throw new error
    // в catch підхопиться - тоді слати на правильний ресурс
    let response;
    try {
        response = sendAPIRequest('https://google.com');
    } catch (e) {
        console.log(e.message);
        if (e.message.includes('the program was not able')) {
            response = sendBackupApiRequest('https://google.com');
        } else {
            throw e;
        }
    }

    console.log(response);
}

function initializeTestdata() {
    try {
        sendImprovisedApiRequest();
    } catch (e) {
        console.log(e.message);
        console.log('failed to initialize');
    }
}

initializeTestdata();



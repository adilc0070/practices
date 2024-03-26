// Simulated asynchronous tasks
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 1 completed');
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 1500);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 3 completed');
        }, 1000);
    });
}

// Execute tasks in parallel
Promise.all([task1(), task2(), task3()])
    .then(results => {
        console.log(results);
        results.forEach(result => {
            console.log(result);
        });
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

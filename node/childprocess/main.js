let { spawn, exec, fork } = require('child_process')
const child = spawn('node', ['d:/practices/node/childprocess/app.js']);

// let process = spawn('notepad')
// process.stdout.on('data', (data) => {
//     console.log('FROM NOTEPAD',data.toString());
// });

let process1 = exec('node d:/practices/node/childprocess/app.js')
process1.stdout.on('data', (data) => {
    console.log("FROM EXEC",data.toString());
})

let process2 = fork('d:/practices/node/childprocess/app.js')
process2.on('message', (data) => {
    console.log('from fork',data);
})

// Listen for output from the child process
child.stdout.on('data', (data) => {
  console.log(`Child process stdout: ${data}`);
});
const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Custom-String-Header': 'Hello World', 
    'Custom-Number-Header': 42, 
    'Custom-Boolean-Header': true, 
    'Custom-Array-Header': [1, 2, 3], 
    'Custom-Object-Header': { key: 'value' } 
  });

  
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// const http=require('http')

// const server=http.createServer((req,res)=>{
//     // res.write('welcome')
//     // res.end()
//     if (req.url === '/home') {
//             res.end('Welcome to our home page')
//           }
//           if (req.url === '/about') {
//             res.end('Here is our short history')
//           }
//           res.end(`
//             <h1>Oops!</h1>
//             <p>We can't seem to find the page you are looking for</p>
//             <a href="/">back home</a>`)
//         })
// server.listen(8080);



const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end(`
      <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
      `)
    }
    if (req.url === '/about') {
      res.end('Here is our short')
    }
    res.end(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
    `)

  })

server.listen(5000)
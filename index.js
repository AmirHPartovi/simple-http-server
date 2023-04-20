const http = require('http')

const server = http.createServer()
const PORT = 3000

server.on('request',(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain',
    });
    res.end('hello!')
})


server.listen(PORT , ()=>{
    console.log(`listening on localhost:${PORT}...`)
})
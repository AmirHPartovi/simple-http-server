const http = require('http')

const server = http.createServer()
const PORT = 3000
const friends =[
    {
        id : 0 ,
        name : 'isaac newton'
    },
    {
        id : 1 ,
        name : 'cristiano ronaldo'
    },
    {
        id : 2 ,
        name : 'leonardo dicaprio'
    },
]

server.on('request',(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json',
    });
    res.end(JSON.stringify(friends))
})


server.listen(PORT , ()=>{
    console.log(`listening on localhost:${PORT}...`)
})
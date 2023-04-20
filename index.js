const http = require('http')

const server = http.createServer()
const PORT = 3000
const friends =[
    {
        id : 0 ,
        name : 'isaac newton',
    },
    {
        id : 1 ,
        name : 'cristiano ronaldo',
    },
    {
        id : 2 ,
        name : 'leonardo dicaprio',
    },
]

server.on('request',(req,res)=>{
    if(req.url === '/friends'){
        
        // res.writeHead(200,{
        //     'Content-Type':'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/json');
        res.end(JSON.stringify(friends));
    }else if (req.url === '/messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> hello amir</li>');
        res.write('<li>this is some dummy text ...</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end()
    }
})


server.listen(PORT , ()=>{
    console.log(`listening on localhost:${PORT}...`)
})
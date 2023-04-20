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
    const items = req.url.split('/');
    // /friends/2  ['' , 'friends' , '2']
    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data',(data)=>{
            const friend = data.toString();
            console.log('request:',friend);
            friends.push(JSON.parse(friend));
        })

    }
    else if(req.method === 'GET' && items[1] === 'friends'){
        
        // res.writeHead(200,{
        //     'Content-Type':'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/json');
        if(items.length === 3){
            const friendsItem = Number(items[2])
            res.end(JSON.stringify(friends[friendsItem]));
        }else{
            res.end(JSON.stringify(friends));
        }

    }else if (req.method === 'GET' && items[1] === 'messages'){
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
    }else{
        res.statusCode = 404;
        res.end();
    }
})


server.listen(PORT , ()=>{
    console.log(`listening on localhost:${PORT}...`)
})
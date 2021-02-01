const http = require('http');
const server= http.createServer((req,res)=>{
    //console.log('request made');
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<p>hello,ninjas</p>');
    res.write('<p>hello,again</p>');
    res.end();
     
});
server.listen(3000,'localhost',()=>{
console.log('listening for request in port 3000');
});  
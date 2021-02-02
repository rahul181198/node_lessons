const http = require('http');
const fs= require('fs');
const server= http.createServer((req,res)=>{
    //console.log('request made');
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
     
    //send an html file

    let path = './views/';
    switch(req.url){
        case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
        case '/about':
        path += 'about.html';
        break;
        case '/about-me':
            res.statusCode=301;
        res.setHeader('Location','./views/about');
        res.end();
        
        break;
        default:
            path +='404.html';
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
    /*res.write('<p>hello,ninjas</p>');
    res.write('<p>hello,again</p>');
    res.end();*/
     
});
server.listen(3000,'localhost',()=>{
console.log('listening for request in port 3000');
});  
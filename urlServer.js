var fs= require("fs");
const url= require('url');
const http = require("http");

const myURL=url.parse("");

myURL.host="localhost:8080/voter/voter_id"

http.createServer((request, response)=>{
    response.setHeader("Content-type", "Text/html");
    fs.readFile('./index.html', null, (err, data)=>{
        if(err){
            response.statusCode = 404;
            response.writeHead(404);
            response.write("Page not found");
        }else{
            response.statusCode = 500;
            response.write(data)
        }
        response.end()
    });

}).listen(8080);
console.log(myURL.host);
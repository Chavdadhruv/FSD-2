// // HTTP module
// hyper text transfer protocol
//// mcq important

// var http=require("http")
// http.createServer(request listener function)
// function(req,res)
// {
//     res.writeHead()
//     res.write()
//     res.end()
// server.listen(port)
// {
//     'code-type':MimeType
// }
// data -->mime-typeof
// HTML  -->text/HTML
// js  -->application/javascript
// json -->application/json
// image -->image/png 

// }
// // 1. create server
// // 2. listen to port
// // 3. handle request
// // 4. send response
// // 5. close connection

// const http = require('http');

// const requestListener = function (req, res) {
//  res.writeHead(200);
// res.write("hello")

//   res.end('Hello, World!');
// }

// const server = http.createServer(requestListener);

// server.listen(9980, function() {
//   console.log('Server is running on port 8180');
// });



// var http = require('http');
// http.createServer(function (req, res) {
//     res.write("hello")
//     res.end("hi")}).listen(8181)
    

// var http = require('http');
// http.createServer(function (req, res) {
// res.write("hello")
// }).listen(8182)


// var http = require('http');
// http.createServer(function (req, res) {
// res.writeHead(200,{'content-Type':'text/html'})
// res.write("HI")
// res.write("<h1>hello world</h1>")
// res.end("hi")
// }).listen(8185)


// var http = require('http');
// http.createServer(function(req,res){    
//     res.writeHead(200,{'content-Type':'text/html'})
//     res.write(req.url)
//     res.end()
// }).listen(8187)



// create http webpage on which home page display welcome to 
// home page student page display welcome to student page
// and any other page display page not found 
// var http = require('http');
// http.createServer(function(req,res){  
//     if(req.url=="/"){  
//     res.writeHead(200,{'content-Type':'text/html'})
//     res.write("<h1>welcome to home page</h1>")
//     res.end()
// }
// else if(req.url=="/student")
//     {
//         res.writeHead(200,{'content-Type':'text/html'})
//         res.write("<h1>welcome to student page</h1>")
//         res.end() 
//     }
// else{
//     res.writeHead(404,{'content-Type':'text/html'})
//     res.write("<h1> page  not  found</h1>")
//     res.end()
// }}).listen(8187)


// http page and pass json obj on webpage 

// var http = require('http');
// http.createServer(function(req,res){  
    
//     res.writeHead(200,{'content-Type':'application/json'})
//     var obj='{"name":"dhruv"}'
//     res.write(obj)
//     res.end()}).listen(8189)


// load image on http webpage

// var http=require("http")
// var fs=require("fs")
// http.createServer(function(req,res){  
//      res.writeHead(200,{'content-Type':'image/jpg'})
//      img=fs.readFileSync('uni.jpg')
//      res.write(img)
//      res.end()}).listen(8189)



var http=require("http")
http.createServer(function(req,res){  
     res.writeHead(302,{'Location':'http://google.com'})
     res.end()}).listen(8189)


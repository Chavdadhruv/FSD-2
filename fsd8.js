// url-uniform resource locater
//http://www.google.com
// protocol={// https://}
// domain={video.google.co.uk:}
// port={80/}
// path={videoplay?}       
// query={docid:-720782&hl=en#}    
//  fragment{00hh02m035}
// default string
// var url=require("url")
// var addr="https://video.google.co.uk:80/videoplay?docid:-720782&hl=en# 00hh02m035"
// var url= require("url")
// var addr="http://localhost:8080/default.html?Name=Prof_Khusbu_patel&initial.pkp"
// var q=url.parse(addr,true)
// console.log(q) //--> url{}
// console.log(q.host) //--> localhost:8080
// console.log(q.pathname) //--> default.html
// console.log(q.query) //--> Name=ProfKhusbupatel&initial.pkp



// 2)
// var u=require("url")
// var addr="http://localhost:8080/default.html?year=2028&month=Feb"
// var q=u.parse(addr,true)
// console.log(q.query.year)

//         if (q.query.year % 4 === 0) {
//             console.log(q.query.year + " is a leap year.")
//         } else {
//             console.log(q.query.year + " is not a leap year.")
//         }
      
// write nodejs programe which fetch filename from requested url and print that files data on http web server
// var u=require("url")
// var h=require("http")
// var ps=require("fs")
// var server=h.createServer(function(req,res)
// {
//     var q=u.parse(req.url,true)
//     data=ps.readFileSync("."+q.pathname)
// console.log("."+q.pathname)
// res.writeHead(200,{"Content-Type":"text/html"})
// res.write(data)
// res.end()
// })
// server.listen(6052)


// var http=require("http")
// var url=require("url")
// http.createServer(function(req,res){
//      q=url.parse(req.url,true)
//      qu=q.query
//      var txt=qu.year+" "+qu.month
//      res.end(txt)}).listen(3001)



// create your own module
// var mymodule=require("./mymodule")
// mymodule.print()
// mymodule.print("hello world")
// mymodule.print("hello world","hello world2")


// method 1
// var d=require('./fsd9.js')
// console.log(d(10,20))

// method 2
// var {sub,mul}=require('./fsd9.js')
// console.log(sub(10,20))
// console.log(mul(10,20))

// // method 3
// var d1=require('./fsd9.js')
// console.log(d1.s(10,20))
// console.log(d1.m(10,20))


// method 4

// var d1=require('./fsd9.js')
// console.log(d1.s(10,20))
// console.log(d1.a(10,20))
// console.log(d1.m(10,20))

var {add,sub,mul}=require('./fsd9.js')
console.log(add(10,20))
console.log(sub(10,20))
console.log(mul(10,20))



// write a node js script to crearte calculator using external modjule having afunction add substract mulitiplication and division 
// this function returns result and calculation write all neccessary js files

// nodemon
// npm install -g nodemon
nodemon -v
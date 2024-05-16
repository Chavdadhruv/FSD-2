// var ps=require("fs")
// // ps.mkdirSync("hello")
// ps.writeFileSync("hello/user.txt","hi")
// ps.appendFileSync("hello/user.txt","how are you ?")
// data=ps.readFileSync("hello/user.txt","utf-8")
// console.log(data)
// // concole.log(data.toString())
// ps.unlinkSync("hello/user.txt")
// ps.rmdirSync("hello")


var fs=require("fs")
fs.writeFile("test.txt","hello World", function(err)
{if(err) 
    console.log(err)
else 
    console.log("write operation completed")
})
var fs=require("fs")
fs.readFile("test.txt", function(err,data){ if(err){
    console.log(err)}
    console.log(data.toString())
    console.log("complete")
})
console.log("program ended")
var fs=require("fs")
fs.appendFile("test1.html", 'have a nice day',
(err)=>{
    if(err){
    console.log(err)}
    console.log("complete")
})


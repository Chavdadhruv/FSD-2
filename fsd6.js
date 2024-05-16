// write code for write,read,append using aquascript callback

// var fs=require("fs")
// fs.writeFile("test2.txt","hello World", ()=>{fs.appendFile("abc.txt","is  it?",()=>
//     {fs.readFile("abc.txt",(err,data)=>{if(err) {
//         console.log(err)}
//         else{
//             console.log("read completed")
//         }
//     console.log(data.toString())})})})
// console.log("file operation completed")


// write a node.js script to take file single digit elements  seprated by
//  white space in .txt file in shorted array of this file elements a node js server 

// var ps=require("fs")
// ps.writeFileSync("s1.txt","5 9 6 1 2")
// data=ps.readFileSync("s1.txt","utf-8")
// data=data.split(" ")
//     console.log(data.sort())



// var ps=require("fs")
// ps.writeFileSync("s1.txt","5 9 6 1 2")
// data=ps.readFileSync("s1.txt","utf-8")
// data=data.split(" ")
// for(i=0;i<data.length;i++)
//     {
//         data[i]=parseInt(data[i])
//     }
//     d1=data.sort()
//     console.log(d1)


// write a node.js script to copy containt of one file to other
//  file data should be fatch from source.txt and insert to destination.txt

// var ps=require("fs")
// ps.writeFileSync("source.txt","hello how are you   aa  akjw akjfwnj")
// data=ps.readFileSync("source.txt","utf-8")
// ps.writeFileSync("destination.txt",data)

// write file using 1 json obj and read the file
//  which gives you same json object in console
// var ps=require("fs")
// var test={"division1":{'name':['Z','B','H']},
// "division2":{'name':['Y','A','G']}}
// data1=JSON.stringify(test)
// ps.writeFileSync("jso.txt",data1)
// data2=ps.readFileSync("jso.txt","utf-8")
// ps.writeFileSync("destination.txt",data2)
// console.log(data2)



// OS Module  for operating system   
// 
// var os=require("os")
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.tmpdir())
// console.log(os.freemem())

//write node js script to create filenamed temp.txt now check if avialablle physical
//  memory of the system if greter than 1 gb then print message memory 
// greater than 1 gb if memory is less than 1gb than show low memory 


// var os=require("os")
// var ps=require("fs")
// console.log(os.freemem())
// freemem=os.freemem()/1024/1024/1024
// if(freemem>1)
//     {
//         ps.writeFileSync("temp.txt","suffcient memory")
//     }
//     else{
//         ps.writeFileSync("temp.txt","low memory")
//     }


    // write node js script to create a folder named aa at temp folder 
    // also create a file named temp1.txt inside aa folder now check if working 
    // 32bit platform than print you are working on windows 64 

    // var os=require("os")
    // var ps=require("fs")
    // f=os.tmpdir()
    // p=os.platform()
    //  ps.mkdirSync(f+"/AA")
    // if(p=="win32")
    //     {
    //         ps.writeFileSync(f+"/AA/temp1.txt","you are working on win32")
    //         console.log(f)
    //     }
    //     else{
    //         ps.writeFileSync(f+"/AA/temp1.txt","you are working on win64")
    //         console.log(f)
    //     }


    // path module
    var path=require("path")
    basename()
    dirname()
    extname()
    var pm=require("path")
    part1="D:/FSD2/node/addon.txt"
    console.log(pm.dirname(path1))
    console.log(pm.extname(path1))
    console.log(pm.basename(path1))
    console.log(pm.parse(path1))
       
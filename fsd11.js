console.log(__filename)
console.log(__dirname)

// 143)
// write node js script to create a class named person by asign name and age 
// in form of members create one function
// named elder with returns elder person object details of elder person should 
// be printed in console as well as in file

// 
// FILE: person.js

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    elder(person) {
      if (this.age > person.age) {
        return this;
      } else {
        return person;
      }
    }
  }
  
  var person1 = new Person("jaynish", 65);
  var person2 = new Person("dev", 30);
  var person3 = new Person("hardik", 25);
  var person4 = new Person("dhruv", 25);
  var person5 = new Person("chavda", 25);

  var elderPerson = person1.elder(person2);

  var fs=require("fs")
  console.log(elderPerson)
  fs.writeFileSync("a.txt",JSON.stringify(elderPerson))

//   144) 4,5 marks imp
// write nodejs script to create a class named Time and assign members HTMLSourceElement,minute,second create 2 obj of time class and both thw time objs so that it should return the value in third time  obj should have HTMLSourceElement,minute,and second such that after edition if second exit and is minute value is 60 than if seconds exceed 60 min should be inc 
class time{
    constructor(hour,min,sec)
    {
        this.hour=hour 
        this.min=min
        this.sec=sec
    }
    timer(p){
var t=new time()
t.hour=this.hour+p.hour
t.min=this.min+p.min
t.sec=this.sec+p.sec

    
    if(t.sec>60)
        {
            t.sec%=60
            t.min++
        }
        if(t.min>60)
            {
                t.min%=60
                t.hour++
            }

            return t
}
}
var t1=new time(1,50,50)
var t2=new time(2,30,50)
var t3=t1.timer(t2)
console.log(t3)
var fs=require("fs")
fs.writeFileSync("t.txt",JSON.stringify(t3))


// const EventEmitter=require("events")
// var eventEmitter=new EventEmitter
// eventEmitter.addListener(event,handle function)
// eventEmitter.on(event,handle function)
// eventEmitter.emit(event,handle function)
// eventEmitter.addlistener(event,handle function)
// eventEmitter.removeListener(event,handle function)
// eventEmitter.removeallListener(event,handle function)


var e=require("events")
var ee=new e.EventEmitter()
ee.on("sayname",()=>{
    console.log("your name is xyz")
})
ee.emit("sayname")

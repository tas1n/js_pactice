var a; //declear
var a=12; //declear & initialization
var a=18;

let name ="Sara";
let age =17;
let height = 5.6;
// console.log(name);
// console.log(age);
// console.log(height);

// let username;
// console.log(username); //undefined
let user= null;
console.log(user)

let fruits =["blueberry","banana","fig"]
console.log(fruits)
console.log(fruits[1])

let user1={ 
    name:"Sara",
    age:17,
    height: 5.6}
console.log(user1);
console.log(user1.name)
// const b ="Hi"
// b ="Hello";
// console.log(b); // not allow, gives error

{//block scope (but var does not follow block scope)
    let age1=12;
    console.log(age1)
}
//console.log(age1)//not defined

const cat ={sound:"Meow"};//in const value can be update but can not be reassigned
cat.sound='meoooo'//value is updated
//cat ={} //reassign is not possible
console.log(cat)

let x=5;
let y="5";
console.log(x===y);//checks both value and data type
console.log(x==y);//checks only the value 

let e=Number.MAX_SAFE_INTEGER
console.log(e)
let r=654684651654184658465n;
r= r+2n;
console.log(r)
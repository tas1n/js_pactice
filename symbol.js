
//Symbol creates unique value
let obj={
    id:1
}

let u1= Symbol("id");
obj[u1]=100;

console.log(obj[u1]);
console.log(obj.id);
console.log(obj);

let num1= Symbol(12)
let num2= Symbol(13)

console.log(num1===num2)

let user={
    name:"Sara",
    age:14
}

let secretId =Symbol("userId");
user[secretId]=1234;

console.log(user[secretId]);

let e=Number.MAX_SAFE_INTEGER
console.log(e)
let r=654684651654184658465n+2n;
console.log(r)
// let num=2
// let num1;
// let num2;
// for(let i=0;i<=5;i++){
//     num=num+2;
//     num1=num;
//     num2=num1+num;
//     console.log(num)
// }
// //console.log(num)
// console.log(num1);
// console.log(num2);

let frutis=['apple','banana','kiwi']

for(let fruit of frutis){
        frutis.pop()
    console.log(fruit)
    //console.log(fruit[2])

    //console.log(fruit)
}

console.log(frutis)

let animels=['cat','dog','bird','cow']
animels.splice(1,2);// splice(start(which index want to delete), deletecount(how many wants to delete))
console.log(animels)

// let alphabet=[['a','b','c'],['d','e','i'],['f','g','h']]
// alphabet.splice(1,1);
// console.log(alphabet)

let alphabet=[['a','b','c'],['d','e','i'],['f','g','h']]
alphabet[1].splice(0,2);
console.log(alphabet)
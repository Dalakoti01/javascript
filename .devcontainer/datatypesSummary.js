/*
Basically all the datatypes in javascript are divided into two catagories :
1. Primitive (call by value) : String, Number, Boolean, Null , UNdefined, Symbol , BigInt
  
2. Non Primitive(call by reference) : Arrays ,Objects, Functions

The above classification is done on the basis that how the datatypes are stored and accessed in the memory
Javascript is a dynamically typed programming language which means at the time of declaration of variables, their datatypes is 
not defined . Where as on the other hand c++ or java are statistically typed programming language


*/

const score = 100
const scoreValue = 100.3
// As we can see from the above example that at the time of declaration, we are not specifying between the datatypes 
// Hence it is dynamically typed programming language

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// As we can see from the above example that Symbol datatypes stores unique values always

// const bigNumber  = 345672646813676768937817383476278346897n

// Non-Primitive Datatypes : Arrays, Function , Objects

let heroes = ["Shaktiman" , "Naagraj", "SuperMan" ]
console.log(typeof heroes);

let obj1 = {
    Name : "Karan",
    Age : "20"
}
// Anything given inside the curly brackets is an object

console.log(typeof obj1);

const func1 = function(){
    console.log("Hello World");
}

console.log(typeof func1);

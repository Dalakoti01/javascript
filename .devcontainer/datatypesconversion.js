let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score)

console.log(typeof valueInNumber);
console.log(valueInNumber); 
// //this output shows us that there is no strict check in javascript hence this is a limitation of javascript that the variables 
// are just converted into some other datatypes (*here string to number without basically checking , so here we have to be al little bit
//more carefull)

/*
"33" => 33
"33abc" => NaN
"true" => 1; "false" => 0
*/

let isLooged = 1;
let booleanIsLoggedIn = Boolean(isLooged)

console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false;
"" => false
"karan" => true
*/

let someNummber = 33
let stringNumber = String(someNummber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********* Operator **********

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Karan"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // this output is due to the guidelines of ecma script
console.log(1 + 2 + "2");// this output is due to the guidelines of ecma script
console.log(3 + 4 * 5 / 2);// this kind of code is not at all reccommended so readability should be considered the most

console.log(true);
console.log(+true);

let num1,num2,num3
num1 = num2 = num3 = 2 + 2 // this kind of code is also not considered as a good readable code so avoid it

let gameCounter  =100
++gameCounter
console.log(gameCounter);

// prefix and postfix increamental operator

//prefix
let x = 3
const y = ++x
console.log(x,y);

//postfix

let a = 3
const b = a++
console.log(a,b);






                            
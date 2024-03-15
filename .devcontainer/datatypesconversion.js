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
                            
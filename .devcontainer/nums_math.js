const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length); //here we have converted the Number into its corresponding string value
console.log(balance.toFixed(2)); // This is widely used when we built some e-commerce website as it gives us the result in the 
// round off value after points

const anotherNumber = 23.8966
console.log(anotherNumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));
// The above method is used to convert the zeroes into comma (,) separated values to enhance the visibility of important figures

// +++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.87));//used to round off any value
console.log(Math.ceil(4.2)); // used to round off to the just above value
console.log(Math.floor(4.9)); // used to round off to the just below value
console.log(Math.min(2,7,3,9));
console.log(Math.max(2,7,3,9));

console.log(Math.random());
//The above random function always gives us the result in values between 0 and 1

console.log((Math.random()*10) + 1);
// Now the above function will always gives us the result ranging in between 1 and 10

console.log(Math.floor((Math.random()*10)+1));
// As we have used Math.floor so we will get the rounded off result which will be just below the actual random generated value

const min = 10
const max = 20

console.log(Math.floor((Math.random()*10) + (max-min+1)) + min);

const name = "karan"
const repoCount = 50
console.log(name + repoCount); // This kind of syntax is not reccomended

// Method 2 : for concantenation of string (interpolation)

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('karan-01-com')

console.log(gameName[0]);//to access the value of string using key 
console.log(gameName.__proto__);// to access the protoype of the string 
// to access the method of strings we do not need to access them using __proto__ again and again . These methods can directly 
// be accessed by directly using their name
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

// The diffrence between slice and substring is that in slice we can also use negative values. of we give negative values in 
// substring then the substring function will ignore them 

const anotherVal = "      karan    "
console.log(anotherVal);
console.log(anotherVal.trim());

// as we can see from the above line that the trim function is used when we have to delete the extra whitespaces which we do not want

const url = "http://karan.com/karan%20dalakoti"
console.log(url.replace('%20','-'));
console.log(url.includes('karan'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

// This above method split is used to convert the strings values into the arrays based on some given parameter
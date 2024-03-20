let myDate = new Date();
console.log(myDate); 

console.log(myDate.toString());
console.log(myDate.toDateString()); // Date written to the point
console.log(myDate.toLocaleString()); // Indian style of writng dates
console.log(myDate.toJSON());
console.log(myDate.toISOString());

// Each method of date gives us the date by removing or adding certain parameters accordingly 

console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,23)

let myCreateDate = new Date(2024,0,23,5,3)
console.log(myCreateDate.toLocaleString());
// Month in javascript are started from 0 not 1 

let anotherDate = new Date("2023-01-14") //Foreign way of writing dates "yy-mm-dd"
console.log(anotherDate.toLocaleString());
//Here one thing can be clearly noted that if we are given dates without ("") then they will be treated as an array so to get
// january (the first month ) we have to write 00 but on the other hand if we are entering dates inside double inverted commas
// so these dates will be treated as an yy-mm-dd so here no array is been used so to get january (the first month we will write 01)

let againDate = new Date("06-12-2002") // Indian way of writing date "mm-dd-yy"
console.log(againDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// The above function is giving us the value of time in millisecond from 1 jan 1970 because this date is defined in the ecma 
// script document . Since we have taken Date.now() so if we print the value multiple times then we will get some differernt
// output each time as time keeps on changing

console.log(againDate.getTime());
// the above value is the time in millisecond from 1 jan 1970 to the date given in againDate variable

// How to convert these values into second 

console.log(Math.round(Date.now()/1000));

let newDate = new Date("06-12-2002")
console.log(newDate.getDay());
console.log(newDate.getMonth() +1); // we are giving +1 because month is 0 based index in javascript so june will give
// 5 as output so to avoid this confusion we are adding 1

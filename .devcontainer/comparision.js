// Comparision between same datatypes

console.log(2==2);
console.log(2<=3);
console.log(2>=3);

// Comparision between different datatypes

console.log("2"  == 2);
console.log("2" <= 3);
console.log("2" >= 3);

// In the above comparision first the datatypes in string is converted into integer and then the comparision is done

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//In the above comparision during an equility check , the null remains null but during a comparsion check , null gets
// converted into 0. Hence there is false when null>0 and true when null >= 0

// === this is also called as an strict check because using anextra = we are also able to check wheather the both datatypes
// are same or not

console.log("2" == 2);
console.log("2" === 2);

/*
At last the comparsion between variables having different datatypes is not reccommended to be done as it bring so much 
problem with the code output as the output may vary because javascript is not a strictly typed programming language 
Also the readability of the code also decreases
*/
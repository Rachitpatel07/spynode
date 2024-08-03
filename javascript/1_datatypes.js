//qu-1 Convert a  string to a number?

var myFavnum = "5";
console.log(typeof +myFavnum);
console.log(typeof Number(myFavnum));

// qu-2 Convert a  number to a string?

let str = 5;
console.log(typeof String(str));
console.log(typeof (str = ""));

// qu-3 Explain  the concept  of truthy and falsy values in javascript.provide examples. ?

var myName = "Rachit";
if(true) {        
    console.log("this is thruty value");
}else{
    console.log("this is falsy value");
}

//? here  are more examples

console.log(parseInt("123"));
//123 (defalut base - 10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("    123 "));
// 123 ( whitespace  is ignored)
console.log(parseInt("077"));
console.log(parseFloat("077"));
// 77 (leading zero are ignored)
console.log(parseInt("1.9"));
console.log(parseFloat("1.9"));
//  1 (Dicemal part is truncated) 

//! when we will not  get an Output

console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));

//NaN (input  can't  be convert to Integer)

 
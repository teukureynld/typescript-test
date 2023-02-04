let Name : string =  "Nama user";

if(Name == "Nama User") {
    console.log(true);
} else {
    console.log(false);
    
}


let hari : number = 1;

console.log(typeof(hari));

switch(hari) {
    case 0 :
        console.log("Hari Minggu");
        break;
    case 1 : 
        console.log("Hari Senin");
        break;
    default :
        console.log("Hari kiamat");
}

// declaring function with 2 parameters types
// const comparing(Number : number, Number2 : number, statement : string) => number,string {
//      Number : number = 25;
//     Number2 : number = 75;
//     let statement = " ";

//     if(Number > Number2) {
//         return statement = "Benar";
//     }
// };

// comparing();

"use strict";
let myString : string = "21"

// convert to int with method +, this tip is coming from geeksforgeeks.org
let convert = +myString;
console.log(convert)

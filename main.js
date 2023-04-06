//primitive date types
//sting, number, boolean, undefined, null

const firstName = "Smith";
const score =  7;
const rating = 5.2;
const isBad = true;
const x = null;
const y = undefined;
let a;
console.log(typeof(firstName,score,rating,isBad,x,y,a));

//Concatenation
let myDemo = document.getElementById("demo").innerHTML = firstName + " scores " + score + " makes his rating go " + rating + ".";

//Template String/Literals
let demo1 = document.getElementById("demo1").innerHTML = `His name is ${firstName} and his score is ${score}.`;
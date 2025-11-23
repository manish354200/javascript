const name="manish"
const repoCount =50
// console.log ( name + repoCount + " value"); overdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//above is used due to string interpolation and also the code is more readable and reliable.

const gameName = new String('Manish-yd')

//console.log(gameName[0]);
//console.log(gameName.__proto__);// to see object


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4); //here last value(4) is excluded
console.log(newString);
const anotherString = gameName.slice(-8,4);//star(9+(-8)) and end before 4th positon.
console.log (anotherString);//slice allows negative index but substring not.substring change negative to zero.

const newStringOne = "   hitesh   "
console.log(newStringOne);//output with spaces
console.log(newStringOne.trim());//remove spaces

const url = "https://manish.com/manish%20yadav" //here browser automatically replace space with %20

console.log(url.replace('%20', '-'))

console.log(url.includes('manish')) //output true

console.log(gameName.split('-'));//output [ 'manish', 'yd']
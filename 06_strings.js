const name="manish"
const repoCount =50

// console.log(name + repoCount + "Value") outdated syntax

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`manishSC`)

//console.log(gameName[0]);
//console.log(gameName._proto_)

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt('2')) //to find character position.
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 4) // if (-8, 4) the it does not obey it and prints from start
console.log(newString)

const anotherString = gameName.slice(-7, 4) // here -8 refers 8th character from last and 4 refers 4th character from start
console.log(anotherString);
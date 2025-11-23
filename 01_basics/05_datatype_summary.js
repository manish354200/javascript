//  Primitive

// 7 types : String , Number, Boolean, Null, Undefined, Symbol, BigInt 

//JavaScript is a dynamically typed language. This means that variable 
// types are determined at runtime, and you do not need to explicitly declare
//  the type of a variable before using it. You can assign different types of 
// values to a variable during its lifetime.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;
const anotherId = Symbol('123')
const Id=Symbol('123')

console.log(Id === anotherId ) 

const bigNumber = 3246635355656777n

// Reference (Non Primitive)
//these are those values whose reference can be directly allocated in memory..

// Array, Objects, Functions

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

const heros= ["shaktiman", "naagraj", "doga"];
 let myObj ={
       name:"manish",
       age: 20,
}

const myFunction = function(){
       console.log("Hello world!");
}

console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack ( use in Primitive type)(here we get copy of declared variable),  
//  Heap (used in Non- primitive type) (here we get reference of original value)

let myYoutubename = "selfishCreationdotcom"

let anothername= myYoutubename
anothername = "gkrealtedquestion"

console. log(myYoutubename);
console. log(anothername);

let userOne = {
       email: "user@google.com",
       upi: "user@tbl"
}

let userTwo = userOne

userTwo.email =" manish@google.com"

console.log (userOne.email)
console.log (userTwo.email)



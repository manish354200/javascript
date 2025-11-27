//  Singleton
// object.create

// object literals
const mySym = Symbol("key1")


const JsUser ={
    name: "Manish",
    "full name" : "Manish Yadav",
    mySym: "mykey1", // type string so user mySym in [] for its type symbol
    age: 19,
    location: "Sultanpur",
    email: "my123@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)

JsUser.email = "prisma@gmail.com"
//Object.freeze(JsUser) // we can't change it further.
//console.log(JsUser);

JsUser.greeting = function() {
    console.log (" Hello Javascript User");
}
JsUser.greetingTwo = function() {
    console.log (  ` Hello Javascript User, ${this.name}` );
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 
// value access mostly with {.}

var c = 300
let a= 200
if(true) {
let a= 10
const b= 20
//console.log("Inner:", a);
}
//console.log(a);
//console.log(b);
//console.log(c);


/* Nested Scope */

function one() {
const username = "hitesh"
function two() {
const website = "snapchat"
//console.log(username);
}
two()
}
one()

/* Interesting case */

console.log(addone(1))

function addone(num){
return num+1.78
}

addTwo(8) 

const addTwo = function(num) {
return num + 2 
}



let score=null
console.log(typeof score)
console.log(typeof (score))

let ValueInNumber=Number(score)
console.log(typeof ValueInNumber)
console.log(ValueInNumber) //(NaN)not a number for score=33abc and undefined;
// for score null output =0;
// "33"=>33
//"33abc"=>NaN
//true=>1; false=>0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true; 0=> false
// "" => false
// "hitesh" => true

let someNumber= 33
let stringNumber =String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
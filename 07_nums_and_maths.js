const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);//converted to string
//console.log(balance.toFixed(1)); //toFixed function used for deciaml place values

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//dconsole. log(hundreds.toLocaleString('en-IN'));

// **************************MATHs*************************

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.7));
//console.log(Math.floor(4.9)); // floor means ground so output is 4
//console.log(Math.ceil(4.3));//ceiling means top so output is 5
//console.log(Math.min(3,5,2,1));
//console.log(Math.max(8,5,9,4,6));

console.log(Math.random());//give value between o and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min)

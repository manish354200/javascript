// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString())
//console.log(typeof myDate); // output object

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//let myCreatedDate = new Date("2030-03-25");
let myCreatedDAte= new Date("01-31-2023")
//console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(myCreatedDAte.getTime()) // output in mili seconds
//console.log(Math.floor(Date.now()/1000)); //converted into second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time` 

newDate.toLocaleString('default', {
    weekday:"long",
})  // We can define everything what we want....
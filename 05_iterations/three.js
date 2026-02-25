// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) { // for of loop
  //console.log(num); 
}

const greetings = "Hello world!"
for(const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps // know for its unique value storage
// Maps are not iteratable....
const map = new Map()
map.set('IN', "Indis")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indis") // not store again bcz already in

//console.log(map);

for (const key of map) {
  //console.log(key); //output as it is in array form
}

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

 const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
 }

//  for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
//  } ** TypeError: myObject is not iterable

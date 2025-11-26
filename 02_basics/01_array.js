// Array

const myArr = [0, 1, 2, 3, 4, 5] // its array are resizable

console.log(myArr[2]) // array are start with zero index
// javascript array copy operations create shallow copy.
const myHeros = ["shaktiman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) // use to insert value in begining of the array
//myArr.shift() // use to remove value in the begining of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9))

const newArr = myArr.join() // use to convert array in to string

// Slice, Splice

console.log("A ", myArr );

const myn1= myArr.slice(1, 3);// does not remove the elements

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr. splice (1,3) // remove the elemets from an array from 1-3
console.log("C", myArr)
console.log(myn2);

// console.log(myArr);
// console.log(typeof newArr) //type is string
// console.log(newArr)


/* shallow Copy  ( jo bhi main change karunga bo original array main bhi change hoga)
  
    A shallow copy of an object is a copy whose properties share the
    same reference(point to the same underlying value)

*/
 
/* Deep Copy

   A deep copy of an object is a copy whose properties do not share the
   same reference.
   
*/


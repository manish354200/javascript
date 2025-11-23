//console.log(2>1)
//console.log(2>=1)
//console.log(2<1)
//console.log(2!=1)

//console.log("2" > 1);
//console.log("02" > 1); // here javascript convert string in to integer by self

console.log(null > 0);//output false
console.log(null == 0);//output false
console.log(null >= 0);//output true and for undefined in place of null it gives always false..
/*here the reason is that an equality check == and
comparison > < >= <= work differently.
comparisons convert null to a number, treating it as
0. That's why (3) null >=0 is true and (1) null > 0 
is false.*/
/*NOTE :- avoid all the above type conversions */


// === (not only check the the value but also chek it strictly means uske datatype ko bhi check karta hai)
console.log("2" == 2) // conversion does not take place both have different datatype does not run...
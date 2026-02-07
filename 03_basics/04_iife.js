// Immediately Invoked Function Expressions (IIFE)

// global scope k pollution se dikkat hoti hai kayi bar toh bo global scope 
// ke decaled varibles ya jo bhi pollution hai vha pr unko hatane k liye ise 
// use karte hai

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // isme function ko pata nhi hota hai ki rukna kha hai to isko end
// karne k liye ; ka use karte hain iske baad hi dusra function use karte hain.

// first () used for function definetion and second one for its execution
((name) => {
    console.log(`DB CONNECTED ONE ${name}`)
})('Manish')
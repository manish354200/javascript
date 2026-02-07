/// arrow function and this keyword

const user= {
    username: "manish",
    price: 576,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this used to refer current context
       // console.log(this)
    }

} // is scope k jitne bhi variables hain unko access karne k liye main this ka use karunga

// user.welcomeMessage() 
// user.username="don"
// user.welcomeMessage()

// console.log(this); //output {} 

// function cool(){
//     let username= "Manish"
//     console.log(this.username); // output undefined
// }
// cool()

// const chai = function () {
//     let username = "Manish"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Manish"
    console.log(this); // output {}
} 

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

const addTwo = (num1, num2) => (num1 + num2) // implicit return matlb function ne maan liya tum return hi karne vale ho


// console.log(addTwo(3,4))

// jab {} use karoge tab return use karna padega, () main nhi karna padega

const addTwo = (num1, num2) => ({username:"hitesh"}) // to return object

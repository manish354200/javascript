
function sayMyName(){
    // console.log("M")
    // console.log("a")
    // console.log("n")
    // console.log("i")
    // console.log("s")
    // console.log("h")
}

// sayMyName() // sayMyName is function referernce and sayMyName() is function execution..

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result
}

const result = addTwoNumbers(3, 5)

//console.log("Result:", result);


function loginUserMessage(username){
    if(!username){
        //console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage()) // if doesn't pass any value it shows usefined user just logged in.


function calculateCartPrice(...num1){//... before num1 is rest operator
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const  user ={
    username:"Manish",
    price: 89
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is
         ${anyobject.price}`);
}

//handleObject(user) to run the above function

handleObject({
    username:"ram",
    price:768
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(gatArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
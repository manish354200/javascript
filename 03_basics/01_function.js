
function sayMyName(){
    console.log("M")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("s")
    console.log("h")
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
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // if doesn't pass any value it shows usefined user just logged in.

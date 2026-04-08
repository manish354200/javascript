// Promise is an object...
const promiseOne = new Promise(function(resolve,reject){ // new keyword se ek naya instancr mil jata hai
  //Do an async task
  // DB calls, cryptographt,network
  setTimeout(function(){
    console.log('Async task is complete')
    resolve() // resove is a method which connected resolve and .then ....
  },1000)
})

// below .then() is directly related to resolve...
promiseOne.then(function(){
  console.log('Promise consumed');
  
  // jo bhi kaam upr promise main hua hai bo yha pr return hota hai....
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  },1000)
}).then(function(){
  console.log(("Async 2 resolved"));
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"manish", email: "mani@gmail.com"})//parameter passing
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"Manish", password: "568"})
    }
    else{
      reject('ERROR: Something went wrong')
    }
  },1000)
})

promiseFour.then((user) =>{
   console.log(user);
   return user.username 
}).then((username)=> {
   console.log(username);
   
}).catch(function(error){
  console.log((error));
})
.finally(()=> console.log("The promise is either resolved or rejected")
)  // executed always


const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"javascript", password: "870"})
    }
    else{
      reject('ERROR: Js went wrong')
    }
  },1000)
})

async function consumePromiseFive(){
  try{
  const response = await promiseFive
  console.log(response);
  } catch(error){
    console.log(error);
  }
}
consumePromiseFive()

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   }catch(error){
//     console.log(("E: ", error));
    
//   }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error)
)
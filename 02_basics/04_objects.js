//const tinderUser = new Object() //singleton object
const tinderUser = {} // non singleton object

tinderUser.ide = "123xyz"
tinderUser.name = "rahul"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser ={
    email: "rau@gmail.com",
    fullname: {
        userfullname: {
            firstname: "manish",
            lastname: "yadav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // acces nested values

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2) // {} is target and others are source
const obj3 = {...obj1,...obj2} // merge using spread operator
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "ma@gmail.com",
    },
    {
        id: 1,
        email: "ma@gmail.com"
    },
     {
        id: 1,
        email: "ma@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); // inderUser all keys converted in to array form
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // all [key:value] converted into array form

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to chect is the property exist in Our object.


const course ={
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "manish"
}

//course.courseInstructor

const {courseInstructor: instructor} = course //destructure the objects..

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "bunty",
//     "coursename": "js in hindi",
//     "price": "coastly"
// }

[
    {},
    {},
    {}
]


// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//   // console.log(item);
//   return item; // output undefined bcz it will not return any value..
// })


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { // filter basics
//   return num>4
// } )

/* parenthese ( (num) => num>4)  here value returns itself */
/* but in { } we have to return the condition*/

// const newNums =[]

// myNums.forEach( (num) => {
//   if(num>4) {
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const books = [ 
  {title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
  {title: 'Book Two', genre: 'Non-fiction', publish: 1992, edition: 2008},
  {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
  {title: 'Book Four', genre: 'Non-fiction', publish: 1989, edition: 2010},
  {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
  {title: 'Book Six', genre: 'fiction', publish: 1987, edition: 2010},
  {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
  {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
  {title: 'Book Nine', genre: 'Non-fiction', publish: 1981, edition: 1989}
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce ( function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc+currval
// },0 )

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2499
  },
  {
    itemName: "mobile dev course",
    price: 5899
  },
  {
    itemName: "data science course",
    price: 12999
  },
  {
    itemName: "py course",
    price: 3490
  }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay);
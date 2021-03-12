const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let x = 0
  for (const i of arr) {
    if(i >= x){
      x = i
    } 
  }
  console.log(x);
}
biggestNumberInArray(array)

function biggestNumberInArray2(arr) {
  let y = 0
  arr.forEach(element => {
    if (element >= y) {
      y = element
    }
  });
  console.log(y);
}
biggestNumberInArray2(array2)

function biggestNumberInArray3(array) {
  let num = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i]
    }
  }
  console.log(num);
}
biggestNumberInArray3(array3)

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (const key in basket) {
    if (key === lookingFor) {
      return lookingFor
    }
  }
  return "didn't find it"
}
checkBasket(amazonBasket, 'books')

const shoppingCart = ['apple', 'eggplant', 'pineapple', 'banana']
const cartDetails = {
  'apple': 5,
  'eggplant': 3, 
  'pineapple': 1, 
  'banana': 2
}
//for of - interating one by one (array and strings)
for (const item of shoppingCart) {
  console.log(item);
}
//for in - enumerating - objects - loop over properties
for (const key in cartDetails) {
  console.log(key);
}
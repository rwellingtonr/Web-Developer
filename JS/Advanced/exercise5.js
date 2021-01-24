// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arrayForEach = []
array.forEach((name) => {
  let { username } = name
  username = username + "!"
  arrayForEach.push(username)
})
console.log(arrayForEach)

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map((name) => {
  let { username } = name
  return username + "?"
})

//Filter the array to only include users who are on team: red
const arrayFilter= array.filter((users)=>{return users.team === "red"})
console.log(arrayFilter)

//Find out the total score of all users using reduce
const arrayReduce = array.reduce((acu, user) => {
  return acu + user.score
},0)
console.log(arrayReduce)
//2
const arrayReduce2 = array.reduce((acu, user) => {
  let { score } = user
  return acu + score
},0)
console.log(arrayReduce2)
// (1), what is the value of i? it is the index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
console.log(newArray)
const secondArray = arrayNum.map((num, i)=>{return num * (i + 1)})
console.log(secondArray)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const itemsExclMark = array.map(data =>{
  data.items = data.items.map(item =>{
    return item + "!"
  })
  return data
})
console.log(itemsExclMark)
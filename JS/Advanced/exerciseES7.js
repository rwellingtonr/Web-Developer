// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John')
//return False


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons2.filter(name => name.includes('John') )
//in this case return 'Johnathan' because this name contains John


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100
const x = power100(5)
console.log(x)

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
const y = power100(10000)
console.log(y)

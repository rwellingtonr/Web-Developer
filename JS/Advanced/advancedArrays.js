//Advanced Arrays
const array = [1, 2, 3, 4, 5]
const double = []
const newArray = array.forEach(num => {
    //doen't return an element, just do the actions
    double.push(num *2);
})
console.log("For each: ", double)

//map
//Simple loop and always have to return something
//basically, transform the array
const mapArray = array.map(num => {return num * 2})
console.log("Map: ", mapArray)

//filter
//just return the TRUE condition
const filterArray = array.filter(num => {return num >= 5 })
console.log("filter array", filterArray)

//reduce (filter and mapping)
const reduceArray = array.reduce((accumulator, num) =>{
    //num is the array's numbers
    //accumulator store the information that happen on the body of function
    return accumulator + num
}, 0)
console.log("reduce ", reduceArray)

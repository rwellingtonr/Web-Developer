var TODO = ["clean room", "brush teeth", "Exercice", "Study JS", "Eat Helth"]
var TODOSunday = ["Workout", "chill out", "play piano", "Study JS", "Eat Helth"]
//For
for (let index = 0; index < TODO.length; index++) {
    TODO[index] = TODO[index] + "!";
    const element = TODO[index];
    console.log(element)
}
//Foreach
//repeat the same function for each one
//for each to do, write the Action and its index
TODO.forEach(function(todo, i){
    console.log(todo, i);
})
function logTodoSunday(todo, i){
    console.log(todo, i)
}
TODOSunday.forEach(logTodoSunday)

//pop
var toDos = TODO.length;
for (let index = 0; index < toDos; index++) {
    TODO.pop();
       
}
console.log(TODO)
//While
var count = 0;
while (count < 10) {
    count++
    console.log(count)
}
//Do
//Do first and after look for the repetition conditional
//Do it at least once
var counterTwo = 10
do{
    console.log(counterTwo)
    counterTwo--
} while (counterTwo >= 0);

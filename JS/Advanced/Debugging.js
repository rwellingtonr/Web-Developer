const flatemed = [[0, 1], [2, 3],[4, 5]].reduce((accumulator, array) =>{
    console.log('Array: ', array);
    console.log('Accumulator: ', accumulator);
    return accumulator.concat(array)
},[])
//Debugging
const flatemed2 = [[0, 1], [2, 3],[4, 5]].reduce((accumulator, array) =>{
    debugger
    return accumulator.concat(array)
},[])
//Call stack
const a = () => {
    const b = () => {
        console.log(4);
    }
    b();
}

console.log('1');
setTimeout(()=>{console.log('2');}, 2000)//2 seconds = 2000 miliseconds
console.log('3');

//CALL STACK

//WEB API
//Callback queue
// Event loop 
//Arrow function
const first = () => {
    const greet = 'Hello there!'
    const second = () => alert(greet)
    return second
}
const newFunction = first()
newFunction()

/*Closures - a function ran. The function executed. It's never going to happen again
BUT it's going remember that there are references to those variants
so the child scope always has access to the parent scope
*/
const multiply = (a, b) => a*b
const curriedMultiply = (x) => (y) => x*y
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(3) //it throws 15 - 5x

//Compose
const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1;
compose(sum, sum)(5)
/*split to explain: f(g(a)) = function sum(function sum(5))
function sum(5 + 1 = 6) = function sum(6)
function sum(6 + 1 = 7)
By this reason the system retuns 7
*/
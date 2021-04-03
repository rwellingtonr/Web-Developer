const promise = new Promise((resolve, reject)=> {
    if (true){
        resolve('Stuff Worked')
    } else {
        reject('It is broken')
    }
})
promise
    .then(result => {console.log(result);})
    .then(result1 => {
        throw Error
        console.log(result1);})
    .catch(() => {console.log('Error!');})

    // ##########################################

const urls = [
    'https://jsonplaceholder.typicode.com/todos', 
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/albums', 
    'https://jsonplaceholder.typicode.com/comments'
]

Promise.all(urls.map(async url => {
    return fetch(url).then(resp => resp.json())
}))
    .then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
        console.log(results[3])
})
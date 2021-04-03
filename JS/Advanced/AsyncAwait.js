// Primises
movePlayer(100, 'left')
    .then(300, 'front')
    .then(20, 'left')
    .then(40 , 'right')

// Async and Await 
// JUST EXAMPLE TO EXPLAIN
async () => {
    const first = await movePlayer(100, 'left')  //Pause this function until I've something for you 
    const second = await movePlayer(300, 'front') //Pause this function until I've something for you
    const thrid = await movePlayer(20, 'left')   //Pause this function until I've something for you
    const fourth = await movePlayer(40, 'right')  //Pause this function until I've something for you
}

// REALISTIC EXAMPLE
const test = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data);
}
test()

// ###################
//   OTHER EXAMPLE
// ###################

const paths = [
    'https://jsonplaceholder.typicode.com/todos/',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/comments'
]
const testPath = async () => {
    try {
        const [ todos, albums, photos, posts, comments ] = 
            await Promise.all(
                paths.map(async (url) => {
                    const resp = await fetch(url)
                    return resp.json()
            }))
        console.log('Todos: ', todos);
        console.log('Albums', albums);
        console.log('Photos', photos);
        console.log('Posts', posts);
        console.log('Comments', comments);
    } catch (err) {
        console.log('Error: ', err);
    }
}
testPath()
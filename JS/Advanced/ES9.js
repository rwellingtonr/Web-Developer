// Object spread operator
const animals = {
    tiger: 23,
    lion: 4,
    monkey: 7
} 
const { tiger, ...rest } = animals;

const objSpread = ((p1, p2, p3) => {
    console.log(p1);
    console.log(p2);
    console.log(p3);
})
objSpread(tiger, rest)

// ########### SUM CASE #############
const nums = [1, 2, 3, 4, 5, 6]
const sum = ((a, b, c, d, e, f)=> {return a+b+c+d+e+f})
sum(...nums)

    // #########
    //    FINALLY
    // #########
const paths = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const knowingTheFinally = async () => {
    try {
        const [ users, posts, albums ] = await Promise.all(
            paths.map(async (path) => {
                // throw Error //Just for test
                const result = await fetch(path)
                return result.json()
            })
        )
        console.log('Users: ', users);
        console.log('Posts: ', posts);
        console.log('Albums: ', albums);
    } catch (err) {
        console.error('Something went wrong. Error message: ', err);
    } finally {
        console.log("It's Done!");
    }
}
knowingTheFinally()

//   #########
//    for await of 
//  #########

const loopThroughUrl = () =>{
    for (const url of paths) {
        console.log(url);
    }
}
loopThroughUrl()

const getData = async () => {
    const arrayOfPromises = paths.map(url => fetch(url))
    for await (let request of arrayOfPromises){
        const data = request.json()
        console.log(data);
    }
}
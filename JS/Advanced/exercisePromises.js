// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise4sec = new Promise((resolve, reject) => {
  if (true){
    setTimeout(() => {
      resolve('Succesess')
    }, 4000)
  } else{
    reject(console.log('fail'))
  }
})
// #2) Run the above promise and make it console.log "success"
promise4sec.then(console.log)

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log('Success!!!');
}, 4000))

const reject = Promise
.reject(new Error('fail!'))
  .then(
    ()=>{}, 
    (error)=>{
      console.error('opss', error);
})

// #4) Catch this error and console log 'Ooops something went wrong'
const reject2 = Promise.reject('failed')
  .catch(()=>{
    console.error('Ooops something went wrong')
  })


const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]
// ########
const urlsFail = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/ajkdsh',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]
// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?


Promise.all(urlsFail.map(async url=> {
  return fetch(url)
    .then(persons => persons.json())}
))
  .then(array => {
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
})
  .catch(e=>{
    console.error('Something went wrong', e);})

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
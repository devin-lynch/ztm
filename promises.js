const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked!')
    } else {
        reject('It broke!')
    }
})

const promise2 = new  Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new  Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new  Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result =>  result + '!')
    .then(result2 => result2 + '?')
    .then(result3 => {
        console.log(result3 + '!');
    })
    .catch(() => console.log('error!'))

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json()) // fetch returns a promise
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))


// a promise is an object that may produce a single value some time in the future
// either ra resolved value, or a reason that it's not resolve (rejected)
// can be in 3 possible states:
    // fulfilled (resolved)
    // rejected
    // pending
// promises are like event listeners, except a promise can only succeed/fail once! useful for things that are async success/failure like api calls. 
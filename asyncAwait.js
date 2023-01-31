// ASYNC AWAIT

movePlayer(100, 'Left')  // a promise -- kinda like an 'I owe you'
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() { // async await -- still a promise under the hood. 
    const first = await movePlayer(100, 'Left'); // pause -- can declare variables
    await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}

// # ## # ## # ## # ## # ## # ## #

// Same result in diff syntax

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}
fetchUsers()

// # ## # ## # ## # ## # ## # ## #

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(response => response.json())
        }))
        console.log(users)
        console.log(posts)
        console.log(albums)
    } catch(err) {
        console.warn(err)
    }
}
getData()
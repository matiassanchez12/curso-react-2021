const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//     .then((response) => response.json())
//     .then(data => console.log(data))

const fn = async() => {
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer asdfasdf'
        },
        body: JSON.stringify({
            name: 'example',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data)
}

fn()
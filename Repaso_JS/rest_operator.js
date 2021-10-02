//En este caso args serian todos los elementos despues de a b 
const rest = (a, b, ...args) =>{
    console.log(a, b)
    args.forEach((elem)=>{
        console.log(elem)
    })
}

// rest(1, 2, 3, 4, 5)

const obj = {a : 1, b : '2', c : 3, d : 4}

const { a, b, ...restobj } = obj

console.log(a, b, restobj)

const arr = [1, 2, 3, 4, 5]

// const [a, d, ...r] = arr

// console.log(a, d, r)
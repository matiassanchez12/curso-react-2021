const arr = [1,2,3,4,5]

const mapped = arr.map((el) => el * 2)

const arr1 = [
    {id: 1, nombre: 'Juan'},
    {id: 2, nombre: 'Lucas'},
    {id: 3, nombre: 'Oracio'},
    {id: 4, nombre: 'Martin'}
]

const nuevoarr = arr1.map((user)=> `<h1>${user.nombre}</h1>`)

console.log(nuevoarr)
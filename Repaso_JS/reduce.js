const arr1 = [
    {id: 1, nombre: 'Juan'},
    {id: 2, nombre: 'Lucas'},
    {id: 3, nombre: 'Oracio'},
    {id: 4, nombre: 'Martin'}
]

const nuevoArr = arr1.reduce((acc, el)=>
    `${acc === '' ? '' : `${acc}, `}${el.nombre}`, '')

// console.log(nuevoArr)

const r1 = arr1.reduce((acc, el)=>{
    if (el.id < 2) {
        return acc
    }
    return acc.concat(el)
}, [])

console.log(r1)
const arr = [1,2,3,4]

// Parte 1 

const arr1 = [5,6]

//arra2 Es una copia mapeada del array arr mas los numeros 2 y 3
const arr2 = [...arr, 2,3]

const arr3 = arr

arr[0] = 'algo'

// console.log(arr, arr2, arr3)

// Parte 2 

const obj1 = { a : 1, b : 2}
const obj2 = { a : 5, c : 'hola'}

const obj3= obj1
obj1.a = 10

console.log(obj1, obj3)
// Programación Funcional

// Función a una variable

const suma = function(a,b) {
    return a+b;
}

console.log(suma(2,2));

// Función como argumento

function operacion(a, b, func) {
    return func(a,b);
}

console.log(5,15,suma);

function multiplicador(n1) { // Función principal
    return function(n2) { // Función anidada
        return n1 * n2;
    }
}

const llamado1 = multiplicador(8) // Se escribe el primer valor como un argumento
console.log(llamado1(2)) // Se especifica el segundo argumento en llamado1

console.log(multiplicador(5)(11)) // Otra forma de llamarlo

// Almacenar funciones dentro de estructura de datos.

const fxs = {
suma : function(a,b) {
    return a+b
},
resta: function(a,b) {
    return a-b
}
}

// Salida de los comandos
console.log(fxs.suma(5,3))
console.log(fxs.resta(8,7))

// Función pura. -> cosas de entrada = cosas de salida, no afecta a nada
// Interpretado:

// Impura
let c = 0;
function suma2(num) {
    c += num;
    return c;
}

console.log(suma(5));
console.log(suma(5));
console.log(suma(8));

console.log(c); // 18, pero es algo que se modificó dentro de la función, por lo que nos afecta todo el código

// Pura

function sumap(a,b) {
    return a + b;
}

console.log(sumap(5,sumap(5,8))); // Recursividad...


// Inmutabilidad - Hacer copia de los objetos sin modificarlos directamente.


let persona = {
    nombre: "Juana",
    edad: "23"
}

persona.edad = "24" // Felíz cumpleaños!

console.log(persona);

let persona2 = Object.freeze({
    nombre: "Juana",
    edad: "23"
})

persona.edad = "24" // Felíz cumpleaños!
console.log(persona)

const clon = {... persona, nacionalidad: "Chibcombiana"}

console.log(clon);

// Funciones flecha  -- Arrow funcs.

const funcionf = (/** Argumentos */) => {
    console.log("Funciona!")
}

funcionf()

const sumar = (a,b) => { return a+b; }
console.log(sumar(5,9))

// Declarativa-Imperativa

// Programación imperativa: Paradigma para realizar una tarea paso a paso.

nums = [1, 2, 3, 4, 5, 6];

// Sacar el cuadrado de estos números
let square = []

for (let i = 0; i < nums.length; i++) {
    square.push(nums[i]*nums[i])
}
console.log(square)


//  Programación declarativa: Centrada en describir de qué lograr, sin describir los pasos en sí.

console.log(nums.map(num => num*num))

// Método filter
// Listar SOLO los números pares
const pares = nums.filter(num => num % 2 === 0)
// Esta toma una función como entrada, que se puede definir dentro de los parentesis como función flecha
console.log(pares)

// Reduce : Devuelve un único valor como resultado

const sumatoria = nums.reduce((acc, curr) => acc+curr,0)

// La función toma dos argumentos y acumula los elementos
console.log(sumatoria)

// foreach : Iteera por un arreglo y hace algo con esos datos.

nums.forEach(function(n,i){
    console.log(`Número ${n} en la posición ${i}`)
})

// find : busca la posición en un elemento.

console.log(nums.find(n => n === 3)) // El elemento es

// some : devuelve un booleano de si lo encontró o no.
console.log(nums.some(n => n === 3)) 
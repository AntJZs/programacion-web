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
function suma(num) {
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

let persona = Object.freeze({
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

// Pausa - Declarativa-Imperativa (01:17:42)
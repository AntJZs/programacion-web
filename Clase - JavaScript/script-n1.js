// Lo básico

console.log("Hola!!", 2+2) // Imprime en pantalla

let nombre = ["Antonio", "De León"]; // Define una lista como variable

console.log(nombre); // Muestra la variable

let v_global = "Soy una variable global" // Define una variable string

function localf() {
    let v_local = "Soy una variable local"
    console.log(v_local);
} // Función con una variable loacall

function globalf() {
    console.log(v_global);
}

localf();
globalf();


if (true) {
    let bloque = "Into the block";
    console.log(bloque);
}


var edad = 18;

if (edad >= 18) {
    var adulto = true;
}

console.log(adulto);

// ECMAScript 6

let bloque = "Otro bloque"; // Esto define una variable.
const perro = "Rufo";       // Esto define una constante.

// Operadores lógicos (if-else)

if (edad >= 18) {
    console.log("Tienes mayoría de edad")
} else {
    console.log(("Eres menor de edad"));
}

//      Más condicionales

console.log(edad >= 18 ? "Mayor de edad" : "Menor de edad")
console.log(perro == "Rufo" ? "Es mi perro" : "No es mi perro")
console.log(bloque.length < 16 ? "Bloque grande" :"Bloque pequeño")

let puntaje = 80

if (puntaje >= 90) {
    console.log("Excelente nota");
} else if (puntaje >= 70) {
    console.log("Buena nota")
} else {
    console.log("Hay momentos mejores...")
}

// Bucles (for/while)

//      For

for (let i = 0; i <= 5 ; i++) {
    console.log("it " + i);
}

//      a While

let c = 0;

while (c < 5) {
    console.log("it" + c);
    c++
}

let diaSemana = "Lunes";
switch (diaSemana) {
    case "Lunes":
        console.log("Hoy es " + diaSemana)
        break;
    case "Martes":
        console.log("Hoy es " + diaSemana)
        break;
    case "Miercoles":
        console.log("Hoy es " + diaSemana)
        break;

    case "Jueves":
        console.log("Hoy es " + diaSemana)
        break;
    case "Viernes":
        console.log("Hoy es " + diaSemana)
        break;
    default:
        console.log("Hoy no es día hábil")

}


// Correr algo si ocurre un error (try/catch)

try {
    let result = 10/5;
console.log(result)
} catch (error) {
    console.log("Error", error.message)
}

// Operadores (AND %% OR !!)

let persona = true;
let come = true;

if (persona && come) {
    console.log("Persona comiendo")
} else {
    console.log("O no está comiendo, o no es persona o las dos")
}

if (persona || come) {
    console.log("O es persona o está comiendo o las dos")
} else {
    console.log("No es persona ni está comiendo")
}

if (nombre === null || nombre === undefined || nombre === "") {
    console.log("No está definido el monbre o no se escribió ninguno")
}

if (!nombre) { // Operador NOT
    console.log("El nombre no está definido")
}

if (edad == 18) { // Igualdad
    console.log("Tiene 18 años")
}
// Una cosa de la igualdad es que no toma en cuenta el tipo de dato
console.log(edad == '18')

// Igualdad estricta
console.log(edad === '18')
// Tiene que ser el mismo tipo de dato que se da

// Desigualdad (!=)
console.log(perro != "Goodie")
// Sufre del mismo problema de igualdad por lo que esto sería falso.
console.log(edad != '18')
// Se resolvería de la misma manera.
console.log(edad !== '18')

// Objetos en js

let someone =  {
    nombre: "Antonio",
    edad: 18,
    oar:  false,
    hobbies: ["Estudiar", "Caminar"]
}

persona.ciudad = "Medellín"

console.log(someone['edad']) // Diccionario de datos

console.log(persona.hobbies) // Muestra los hobbies 

delete persona.oar; // Borra un elemento de la lista

console.log(persona)

// Arreglos

let colors = ["Black", "White", "Yellow", "Brown"]

console.log(colors);
console.log(colors[1]);
// Métodos

//  Concat - Concantena una lista con otra. Toma como parámetro la otra lista.
colors = colors.concat(["Blue", "Red", "Green"])
console.log(colors);

// Includes - Mira si una lista incluye un elemento.

console.log(colors.includes("Red"));
console.log(colors.includes("Magenta"));

// IndexOf - Devuelve la posición del elemento almacenado, si no se encuentra se define como -1

console.log(colors.indexOf("White"));
console.log(colors.indexOf("Lime"));

let frutas = ["Manzanas", "Naranjas", "Peras"]

// push
frutas;
frutas.push("Guayabas", "Mangos") // Inserta elementos al arreglo

console.log(frutas);

// pop - Elimina el último elemento del arreglo

popped = frutas.pop(); // Pero lo puedo guardar
frutas;
popped;

// shift - Elimina el primer elemento del arreglo

console.log(frutas.shift()); // Elimina

// Quiero agregar otras frutas como el primer elemento, para eso se usa unshift.
frutas.unshift("Mamoncillos", "Papayas")

frutas

// reverse - Invierte el orden de la lista. 

let letras = ["a", "b", "c", "d", "e", "f"]
satrel = letras.reverse()
console.log(satrel)


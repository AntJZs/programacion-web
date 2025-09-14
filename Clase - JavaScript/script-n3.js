// Asincronismo, Promesas, callbacks, async wait

// Esto busca hacer las cosas paralelamente, ya que no todo en código se hace sincrónicamente.

// Callbacks : Funciones como argumentos, que se ejecutan después de que una tarea se haya completado

showMessage = (msg, fCallback) => {
    setTimeout(() => {
        fCallback();
}, 5000)
    console.log('Mensaje recibido ! ', msg);
}

fCallback =()=> {
    console.log('Callback ejecutado')
}

showMessage('Holamundo0', fCallback)

// Promesas : Presenta la finalización/falla de una operación asincrónica. Estas tienen 3 estados: dependiente (NOT FINISHED), resuelta (OK), rechazada (REJECTED)

const getRandomN =()=> {
    return new Promise((resolve, reject) => {
        const num = Math.random()

        if (num > 0.5) {
            resolve(num)
        } else {
            reject("El número no cumple con los estándares de calidad")
        }
    })
}

getRandomN()
.then((num) => {
    console.log(`Numero obtenido ${num}`)
})
.catch((err)=> {
    console.log(`Error ${err}`)
})

// Async Await : Permite trabajar la asincronía más limpiamente.
//  Mismo código, diferente  forma.

/** Se resuelve o es rechazada */
const getRandomNumber = async () => {
    try {
        const num = await getRandomN()
        // new promise ((resolve, reject) => (
        // }) /** Se puede hacer de nuevo, pero ya existe, ahorremos memoria */
        console.log(`Número obtenido: ${num}`)
        /** Solo se puede usar solo con una función empezada con async */
    } catch (err) {
        console.log(`Surgió un error ${err}`)
    }
}

getRandomNumber()
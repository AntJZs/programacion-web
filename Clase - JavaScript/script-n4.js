// Solicitudes HTTP
/**
 * GET: Recuperar
 * POST: Guardar
 * PUT: Editar
 * DELETE: Eliminar
 * 
 * Si cumple las características, te devuelve la información que pediste
 * 
 * JSON: JavaScript Object Notation
 *  Es usado para almacenar datos.
 */

// Método básico (Fetch API)
const baseCatsURL = 'https://openlibrary.org/works/OL45804W.json'
fetch(baseCatsURL)
.then(response => response.json())
.then(datos =>console.log(datos))

// con async await 

const fetchData = async () => {
    try {
        const baseURL = 'https://openlibrary.org/works/OL23919A.json'
        const req = await fetch(baseURL);
        const data = await req.json()
        console.log(data) 
    } catch (err) {
        console.log(err)
    }
}

fetchData()

// Usando axios (01:59:55)
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
const baseURL = `https://openlibrary.org/works/OL23919A.json`;

fetch(baseURL)
  .then((response) => response.json())
  .then((datos) => console.log(datos));

// con async await

const fetchData = async () => {
  try {
    // const baseURL = 'https://openlibrary.org/works/OL23919A.json'
    const req = await fetch(baseURL);
    const data = await req.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

//  POST

// const baseURL = ...
const endpoint = 'auth/login';
const URL = `http://192.168.122.1:2283/${endpoint}`;
console.log(URL);
const opts = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: {
    email: 'testuser@email.com',
    password: '12345',
  },
};

fetch(URL, opts)
  .then((response) => response.json())
  .then((datos) => console.log(datos));

//

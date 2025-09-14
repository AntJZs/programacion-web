const getInputVal = () => {
  let input = document.getElementById('query');
  let text = input.value;
  search(text);
};

const search = (searchQuery) => {
  const baseURL = 'http://universities.hipolabs.com/search';
  const endpoint = `?name=${searchQuery}`;
  const URL = `${baseURL}${endpoint}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => placeInfo(data))
    .catch((error) => {
      let message = document.getElementById('status');
      message.innerText = 'No se han encontrado resultados... Prueba otra búsqueda.';
    });
};

const placeInfo = (response) => {
  let stuff = document.getElementById('response');
  response.forEach((element) => {
    stuff.innerHTML += `
        <div class="item">
          <div>
            <h3>${element.name}</h3>
            <p>${element.country}</p>
          </div>
        <a class="custom-link" href="${element.web_pages[0]}">
          <button class="custom-button">Entrar</button>
        </a>
        </div>
        `;
  });
  //   stuff.innerHTML = `
  //         <div>
  //         <h3>${response[0].name}</h3>
  //         <p>${response[0].country}</p>
  //         </div>
  //         <a href="${response[0].web_pages[0]}">
  //         <button class="custom-button">Entrar</button>
  //         </a>`;
};

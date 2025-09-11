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
    .then((data) => placeInfo(data));
};

const placeInfo = (response) => {
  let stuff = document.getElementById('response');
  stuff.innerHTML = `
        <div>
        <h3>${response[0].name}</h3>
        <p>${response[0].country}</p>
        </div>
        <a href="${response[0].web_pages[0]}">
        <button class="custom-button">Entrar</button>
        </a>`;
};

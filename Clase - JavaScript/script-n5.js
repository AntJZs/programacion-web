// ACCEDIENDO AL DOM A TRAVÉS DE JAVASCRIPT
const getInputValue = () => {
  let textInput = document.getElementById('num');
  let val = textInput.value;
  petAPI(val);
  console.log(val);
};

const petAPI = (code) => {
  const baseURL = 'https://http.cat/';
  const url = `${baseURL}${code}`;
  axios
    .get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => putData(res.data))
    .catch((err) => console.log(err));
};

const putData = (data) => {
  let res = document.getElementById('response-info');
  res.innerHTML = `
    <img src="${data}">
    `;
};

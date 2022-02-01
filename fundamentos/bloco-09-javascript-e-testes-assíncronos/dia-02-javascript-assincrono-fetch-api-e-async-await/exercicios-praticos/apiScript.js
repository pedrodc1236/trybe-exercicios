// Exercicio 01
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const domPag = (param) => {
  const captureH2 = document.querySelector('#jokeContainer'); 
  captureH2.innerText = param.joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => domPag(data));
    
};

window.onload = () => fetchJoke();



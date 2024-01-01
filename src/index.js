import './styles/styles.css';

const API_KEY = '53f8fe5738774873a1782717233012';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

async function fetchData(city = 'London') {
  const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);

  const data = await response.json();

  return data;
}

function displayData(data) {
  const cityName = document.getElementById('cityName');
  const weatherPng = document.getElementById('weatherPng');
  const weatherValue = document.getElementById('weatherValue');
  const humidity = document.getElementById('humidity');
  const precipitation = document.getElementById('precipitation');
  const feelslike = document.getElementById('feelslike');
  const text = document.getElementById('weatherText');

  const windSpeed = document.querySelector('#wind');

  cityName.textContent = `${data.location.name}, ${data.location.country}`;
  weatherPng.src = data.current.condition.icon;
  weatherValue.textContent = `${data.current.temp_c}`;
  humidity.textContent = data.current.humidity;
  precipitation.textContent = data.current.precip_in;
  feelslike.textContent = data.current.feelslike_c;
  windSpeed.textContent = data.current.wind_kph;
  text.textContent = data.current.condition.text;
}

function displayLoader() {
  const main = document.querySelector('main');

  const loaderDiv = document.getElementById('loaderDiv');

  loaderDiv.style.display = 'flex';
  main.style.display = 'none';
}

function removeLoader() {
  const main = document.querySelector('main');
  const loaderDiv = document.getElementById('loaderDiv');

  loaderDiv.style.display = 'none';
  main.style.display = 'grid';
}

function handleSearch() {
  const input = document.getElementById('cityInput');
  const btn = document.getElementById('cityInputBtn');

  btn.addEventListener('click', () => {
    displayLoader();

    fetchData(input.value)
      .then((data) => {
        setTimeout(() => {
          try {
            removeLoader();
            displayData(data);
          } catch (err) {
            alert('No location found');
          }
        }, 1000);
      })
      .catch((err) => alert(err.message));
  });
}

// default
displayLoader();

fetchData()
  .then((data) => {
    setTimeout(() => {
      removeLoader();
      displayData(data);
    }, 1000);
  }).catch((err) => alert(err.message));

handleSearch();

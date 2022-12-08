const URL = 'https://restcountries.com/v3.1';

export const fetchCountries = name => {
  fetch(`${URL}/name/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

console.log(fetchCountries('ukr'));

const URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name => {
  fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

console.log(fetchCountries('ukr'));

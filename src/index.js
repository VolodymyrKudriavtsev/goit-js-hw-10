import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
let searchBoxValue = '';
let countries = [];

const getCounrtyListMarkup = ({ flags, name }) => {
  return `
  <li class="country-element">
    <img src="${flags.svg}" alt="Country flag" width="25" />
    <h class="country-title">${name.common}</h>
  </li>
`;
};

const getCounrtyInfoMarkup = ({
  flags,
  name,
  capital,
  population,
  languages,
}) => {
  console.log(languages);
  return `
  <div class="card-title">
    <img src="${flags.svg}" alt="Country flag" width="40" />
    <h>${name.official}</h>
  </div>
  <ul class="card-list">
    <li class="card-element"><span>Capital:</span>${capital}</li>
    <li class="card-element"><span>Population:</span>${population}</li>
    <li class="card-element"><span>Languages:</span>${languages}</li>
  </ul>
  `;
};

const renderList = () => {
  // refs.counrtyList.innerHTML = '';
  // refs.counrtyInfo.innerHTML = '';
  const list = countries.map(getCounrtyListMarkup);
  refs.counrtyList.insertAdjacentHTML('beforeend', list.join(''));
};
const renderInfo = () => {};

const refs = {
  searchBox: document.querySelector('#search-box'),
  counrtyList: document.querySelector('.country-list'),
  counrtyInfo: document.querySelector('.country-info'),
};

const onSearchBoxInput = e => {
  searchBoxValue = e.target.value.trim();
  if (searchBoxValue === '') {
    refs.counrtyList.innerHTML = '';
    refs.counrtyInfo.innerHTML = '';
    return;
  }
  fetchCountries(searchBoxValue).then(data => {
    countries = data;
    // render();
    refs.counrtyList.innerHTML = '';
    refs.counrtyInfo.innerHTML = '';
    renderList();

    const info = countries.map(getCounrtyInfoMarkup);
    refs.counrtyInfo.insertAdjacentHTML('beforeend', info.join(''));
  });
};

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchBoxInput, DEBOUNCE_DELAY)
);

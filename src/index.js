import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
let country = '';

const refs = {
  searchBox: document.querySelector('#search-box'),
};

const onSearchBoxInput = e => {
  country = e.target.value;
  console.log(country);
  fetchCountries(country);
};

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchBoxInput, DEBOUNCE_DELAY)
);

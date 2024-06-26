import { fetchCountries } from "./fetchCountries.js";

Notiflix.Notify.Init({});

const refs = {
  searchEl : document.querySelector('#search-box'),
  countryInfo : document.querySelector('.country-info'),
  countryList : document.querySelector('.country-list'),
};

// const country_list = document.querySelector('.country-list');


const clearMarkup = ref => (ref.innerHTML = '');

function inputHandler() {
  const textInput = refs.searchEl.value.trim();
  if (!textInput) {
    clearMarkup(refs.countryList);
    clearMarkup(refs.countryInfo);
    return;
  }

  
  fetchCountries(textInput) 
    .then(data => {
      if (data.length > 10) {
        clearMarkup(refs.countryList);
        clearMarkup(refs.countryInfo);
        Notiflix.Notify.Info(
          'Too many matches found. Please enter a more specific name'
        );
        return;
      }
      renderMarkup(data);
    })
    .catch(err => {
      clearMarkup(refs.countryList);
      clearMarkup(refs.countryInfo);
      Notiflix.Notify.Failure('Oops..., there is no country with that name');
    });
};

const renderMarkup = data => {
  if (data.length === 1) {
    clearMarkup(refs.countryList);
    const markupInfo = createInfoMarkup(data);
    refs.countryInfo.innerHTML = markupInfo;
  } else {
    clearMarkup(refs.countryInfo);
    const markupList = createListMarkup(data);
    refs.countryList.innerHTML = markupList;
  }
};

const createListMarkup = data => {
  return data
    .map(
      ({ name, flags }) =>
        `<li><img src="${flags.png}" alt="${name.official}" width="60" height="40">${name.official}</li>`
    )
    .join('');
    
};

const createInfoMarkup = data => {
  return data.map(
    ({ name, capital, population, flags, languages }) =>
      `<img src="${flags.png}" alt="${name.official}" width="200" height="100">
      <h1>${name.official}</h1>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>`
  );
};

refs.searchEl.addEventListener('input', function() {
  setTimeout(() => {
    inputHandler(this.value)
  }, 300);
});
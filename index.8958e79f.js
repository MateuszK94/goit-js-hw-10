!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},e=n.parcelRequireabb0;null==e&&((e=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,t){o[n]=t},n.parcelRequireabb0=e);var i=e("37gXm");Notiflix.Notify.Init({});var r={searchEl:document.querySelector("#search-box"),countryInfo:document.querySelector(".country-info"),countryList:document.querySelector(".country-list")},c=function(n){return n.innerHTML=""};var a=function(n){if(1===n.length){c(r.countryList);var t=f(n);r.countryInfo.innerHTML=t}else{c(r.countryInfo);var o=u(n);r.countryList.innerHTML=o}},u=function(n){return n.map((function(n){var t=n.name,o=n.flags;return'<li><img src="'.concat(o.png,'" alt="').concat(t.official,'" width="60" height="40">').concat(t.official,"</li>")})).join("")},f=function(n){return n.map((function(n){var t=n.name,o=n.capital,e=n.population,i=n.flags,r=n.languages;return'<img src="'.concat(i.png,'" alt="').concat(t.official,'" width="200" height="100">\n      <h1>').concat(t.official,"</h1>\n      <p>Capital: ").concat(o,"</p>\n      <p>Population: ").concat(e,"</p>\n      <p>Languages: ").concat(Object.values(r),"</p>")}))};r.searchEl.addEventListener("input",(function(){var n=this;setTimeout((function(){!function(){var n=r.searchEl.value.trim();if(!n)return c(r.countryList),void c(r.countryInfo);(0,i.fetchCountries)(n).then((function(n){if(n.length>10)return c(r.countryList),c(r.countryInfo),void Notiflix.Notify.Info("Too many matches found. Please enter a more specific name");a(n)})).catch((function(n){c(r.countryList),c(r.countryInfo),Notiflix.Notify.Failure("Oops..., there is no country with that name")}))}(n.value)}),300)}))}();
//# sourceMappingURL=index.8958e79f.js.map
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequireabb0;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequireabb0=o),o.register("37gXm",(function(e,n){var t,o,r,i;t=e.exports,o="fetchCountries",r=function(){return a},Object.defineProperty(t,o,{get:r,set:i,enumerable:!0,configurable:!0});var a=function(e){return fetch("".concat("https://restcountries.com/v3.1/name/").concat(e,"?").concat("fields=name,capital,population,flags,languages")).then((function(e){if(console.log(!e.ok),!e.ok)throw new Error(e.status);return e.json()}))}})),o("37gXm")}();
//# sourceMappingURL=index.525c8237.js.map

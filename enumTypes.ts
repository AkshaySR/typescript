enum countries {
    India,
    USA,
    Germany
}

let country1: countries = countries.India;
console.log(country1); // gives 0 in the console
let country2: countries = countries.USA;
console.log(country2); // gives 1 in the console
let country3: countries = countries.USA;
console.log(country3); // gives 2 in the console

enum countries2 {
    India = 100,
    USA = 200,
    Germany = 300
}

let countryValue1 : countries2 = countries2.India;
console.log(countryValue1); // gives 100 in the console
let countryValue2 : countries2 = countries2.USA;
console.log(countryValue1); // gives 200 in the console
let countryValue3 : countries2 = countries2.Germany;
console.log(countryValue1); // gives 300 in the console
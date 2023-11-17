'use strict';
/*
// Aula 32 - Strict Mode
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive :D');

// const interface = 'audio';
// const private = 534;
const if = 23;
*/
/*

// Aula 33 - Functions
function logger() {
    console.log('My name is Odair.');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(`A apple juice is a ${appleJuice}`);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(`A apple and orange juice is a ${appleJuice}`);



*/
// Aula 34 - Fuction declaration vs Expressions

/*
// Funcion declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//Funciron expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
// Aula 35 - Arrow functions
// Arrow Funciron
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years, in ${65 + birthyear}`;
}

console.log(yearsUntilRetirement(1983, 'Odair'));
console.log(yearsUntilRetirement(1969, 'Regiane'));
console.log(yearsUntilRetirement(1994, 'Kimberly'));
*/
/*
// Aula 36 - Functions calling other Functions
function cutFruitsPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

// Aula 37 - Reviewing Functions
const calcAge = function (birthyear) {
    return 2023 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    return retirement;
    //return `${firstName} will retire in ${retirement} years, in ${65 + birthyear}`;
}

console.log(yearsUntilRetirement(1983, 'Odair'));
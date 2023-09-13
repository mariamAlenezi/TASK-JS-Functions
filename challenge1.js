/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("Mariam");
}

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(yearOfBirth) {
  let age = 2023 - yearOfBirth;
  console.log(age);
}
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(`the bigger number is ${number1}`);
  } else console.log(`the bigger number is ${number2}`);
}

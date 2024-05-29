const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["Apple", "Banana", "Mango", "Grapes"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

const numbersArray = [2, -7, 5, 7, -8, -6, 5];
const positiveNumbersArray = numbersArray.filter((num) => num > 0);
console.log(positiveNumbersArray);

const fruits = ["apple", "kiwi", "orange", "grapes", "melon"];
const fruitsContainingA = fruits.filter((fruit) => fruit.includes("a"));
console.log(fruitsContainingA);

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const wordsLength = words.map((word) => word.length);
console.log(wordsLength);

const numbers = [1, 2, 3, 4, 5];
const squareOfNumbers = numbers.map((num) => num ** 2);
console.log(squareOfNumbers);

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const upperCaseString = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseString);

const nums = [4, 9, 16, 25, 36];

const sqrtOfNums = nums.map((num) => Math.sqrt(num));
console.log(sqrtOfNums);

const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];
const prefixedArray = prefixFruits.map((fruit) => `fruit-${fruit}`);
console.log(prefixedArray);

const numbersArray = [1, 2, 3, 4, 5];
const addToNumbersArray = numbersArray.map((num) => num + 10);
console.log(addToNumbersArray);

const numsArray = [1, 2, 3, 4, 5];
const addSquareToArray = numsArray.map((num) => num ** 2 + num);
console.log(addSquareToArray);

const numsArr = [-5, 3, -8, 12, -1, 6];
const absoluteNumsArray = numsArr.map((num) => Math.abs(num));
console.log(absoluteNumsArray);

const phrases = ["Hello", "How are you", "Goodbye"];
const appendToPhrases = phrases.map((phrase) => phrase + "!");
console.log(appendToPhrases);

const wordsArray = ["apple", "banana", "kiwi", "orange", "grape"];

const capitalizeThirdChar = wordsArray.map(
  (word) => word.slice(0, 2) + word.charAt(2).toUpperCase() + word.slice(3)
);

console.log(capitalizeThirdChar);

const nums = [12, 5, 20, 7, 8, 15, 30];

const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["kiwi", "mango", "apple", "orange", "banana"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

const wordsArray = ["Sun", "Moon", "Star", "Planet", "Saturn"];

const startWithS = wordsArray.filter((word) => word.startsWith("S"));
console.log(startWithS);

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const divisibleBySevenAndThree = numbs.filter(
  (num) => num % 7 === 0 && num % 3 === 0
);

console.log(divisibleBySevenAndThree);

const newWords = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const lowerCaseWords = newWords.filter((word) => word === word.toLowerCase());
console.log(lowerCaseWords);

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const notContainingA = wordsY.filter((word) => !word.includes("a"));
console.log(notContainingA);

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTwoOrThree = numsOnetoTen.filter(
  (num) => num % 2 === 0 || num % 3 === 0
);

console.log(multiplyByTwoOrThree);

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const includesYOrA = feelingWords.filter(
  (word) => word.includes("y") || word.includes("a")
);

console.log(includesYOrA);

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];

const numbersBetween = newNums.filter((num) => num >= 20 && num <= 40);
console.log(numbersBetween);

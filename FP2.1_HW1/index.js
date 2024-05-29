const nums = [12, 5, 20, 8, 15, 30];

const numberGreaterThen10 = nums.filter((num) => num > 10);
console.log(numberGreaterThen10);

const words = ["hello", "world", "apple", "orange", "banana"];

const wordsContainingO = words.filter((word) => word.includes("o"));
console.log(wordsContainingO);

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter((num) => {
  if (num === 2) return num;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }
    return num;
  }
});

console.log(primeNumbers);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notThreeMultiples = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notThreeMultiples);

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notDivisibleByTwoAndThree = numbs.filter(
  (num) => num % 2 !== 0 && num % 3 !== 0
);
console.log(notDivisibleByTwoAndThree);

const wordsArray = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const upperCaseWords = wordsArray.filter((word) => word === word.toUpperCase());
console.log(upperCaseWords);

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const notEndingWithY = wordsY.filter((word) => !word.endsWith("y"));
console.log(notEndingWithY);

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByTwoAndThree = numsArray.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);

console.log(multiplyByTwoAndThree);

const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];

const includesYAndU = feelingWords.filter(
  (words) => words.includes("y") && words.includes("u")
);
console.log(includesYAndU);

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyByFiveOrThree = newNums.filter(
  (num) => num % 5 === 0 || num % 3 === 0
);

console.log(multiplyByFiveOrThree);

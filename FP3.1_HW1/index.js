const words = ["apple", "banana", "kiwi", "orange", "grape"];
const longestString = words.reduce(
  (accumulator, current) =>
    accumulator.length < current.length ? current : accumulator,
  words[0]
);

console.log(longestString);

const numbers = [10, 5, 8, 20, 15];
const minimumNum = numbers.reduce(
  (accumulator, current) => (accumulator < current ? accumulator : current),
  numbers[0]
);

console.log(minimumNum);

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];
const totalLength = wordsLength.reduce(
  (accumulator, current) => accumulator + current.length,
  0
);

console.log(totalLength);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + 1 : acc),
  0
);
console.log(evenNumbers);

const wordsCaps = ["hello", "world", "how", "are", "you"];

const concatString = wordsCaps.reduce(
  (acc, curr) => acc + (curr.charAt(0).toUpperCase() + curr.slice(1)) + " ",
  ""
);
console.log(concatString);

const numsAvg = [10, 15, 20, 25, 30];
const sumOfNum = numsAvg.reduce(
  (accumulator, current) => accumulator + current,
  0
);

const avgOfNum = sumOfNum / numsAvg.length;
console.log(avgOfNum);

const numbersArray = [1, 2, 3, 4, 5];
const sumOfSquare = numbersArray.reduce((acc, curr) => acc + curr ** 2, 0);
console.log(sumOfSquare);

const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];
const wordCount = stationeryWords.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(wordCount);

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
const firstCharCount = wordsLetter.reduce((acc, curr) => {
  acc[curr.charAt(0)] = (acc[curr.charAt(0)] || 0) + 1;
  return acc;
}, {});

console.log(firstCharCount);

const numPositive = [-2, 3, 4, -5, 6];
const productOfPositive = numPositive.reduce(
  (acc, curr) => (curr > 0 ? acc * curr : acc),
  1
);
console.log(productOfPositive);

const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];

const totalLength = stationeryWords.reduce((acc, curr) => acc + curr.length, 0);

console.log(totalLength);

const numbersArray = [1, 2, 3, 4, 5, 6];
const sumOfEven = numbersArray.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);

console.log(sumOfEven);

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];
const countOfOdd = numsArr.reduce(
  (acc, curr) => (curr % 2 !== 0 ? acc + 1 : acc),
  0
);

console.log(countOfOdd);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const countOfEvenNOdd = nums.reduce(
  (acc, curr) => {
    curr % 2 === 0
      ? (acc["even"] = acc["even"] + 1)
      : (acc["odd"] = acc["odd"] + 1);

    return acc;
  },
  { even: 0, odd: 0 }
);

console.log(countOfEvenNOdd);

const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const countOfPosAndNeg = allNumns.reduce(
  (acc, curr) => {
    curr > 0 ? (acc["pos"] += 1) : (acc["neg"] += 1);
    return acc;
  },
  { pos: 0, neg: 0 }
);
console.log(countOfPosAndNeg);

const numPositive = [-2, 3, 4, 0, -5, 6];
const productOfNeg = numPositive.reduce(
  (acc, curr) => (curr < 0 ? acc * curr : acc),
  1
);
console.log(productOfNeg);

const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"];
const concatString = wordsCaps.reduce(
  (acc, curr) => acc + curr.toUpperCase() + " ",
  ""
);

console.log(concatString);

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const countOfNum = allNumsArr.reduce(
  (acc, curr) => {
    curr > 0
      ? curr % 2 == 0
        ? (acc["posEven"] += 1)
        : (acc["other"] += 1)
      : (acc["other"] += 1);

    return acc;
  },
  { posEven: 0, other: 0 }
);

console.log(countOfNum);

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];
const sumOfNegOdd = numbersArr.reduce(
  (acc, curr) => (curr < 0 ? (curr % -2 !== 0 ? acc + curr : acc) : acc),
  0
);
console.log(sumOfNegOdd);

const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];
const concatLetters = letters.reduce((acc, curr) => acc + curr, "");
console.log(concatLetters);

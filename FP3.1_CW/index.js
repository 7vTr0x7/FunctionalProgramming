const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

const sumOfNum = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sumOfNum);

const stringArray = ["Hello", " World", "!"];
const concatString = stringArray.reduce(
  (accumulator, current) => accumulator + current,
  ""
);
console.log(concatString);

const numArray = [10, 5, 8, 20, 15];
const maxNumber = numArray.reduce((acc, curr) => (acc < curr ? curr : acc), 0);

console.log(maxNumber);

const fruits = ["apple", "banana", "apple", "kiwi", "orange", "kiwi"];

const fruitCount = fruits.reduce((accumulator, current) => {
  accumulator[current] = (accumulator[current] || 0) + 1;
  return accumulator;
}, {});

console.log(fruitCount);

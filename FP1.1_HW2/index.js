const words = ["apple", "banana", "kiwi", "orange", "grape"];
const firstThreeCharOfElement = words.map((word) => word.slice(0, 3));
console.log(firstThreeCharOfElement);

const nums = [1, 2, 3, 4, 5];
const cubeOfnumsArray = nums.map((num) => num ** 3);
console.log(cubeOfnumsArray);

const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const extractedFirstTwoCharArray = fruitsArray.map((fruit) => fruit.slice(2));
console.log(extractedFirstTwoCharArray);

const salaries = [5000, 7500, 12000, 3000, 9000];
const addBonusToSalaries = salaries.map((salary) => salary + salary * 0.1);
console.log(addBonusToSalaries);

const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const addGreetingsToArray = names.map((name) => `Hello,${name}`);
console.log(addGreetingsToArray);

const sentences = [
  "Hello, how are you?",
  "JavaScript is fun!",
  "Arrays are versatile.",
];
const lengthOfSentences = sentences.map((sentence) => sentence.length);
console.log(lengthOfSentences);

const temperaturesCelsius = [0, 20, 37, -5, 10];
const celsiusToFahrenheit = temperaturesCelsius.map(
  (celsius) => celsius * (9 / 5) + 32
);
console.log(celsiusToFahrenheit);

const prices = [50, 75, 120, 30, 90];
const discountedPrices = prices.map((price) => price - price * 0.1);
console.log(discountedPrices);

const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];
const fixedDecimalNumbers = decimalNumbers.map((num) => num.toFixed(2));
console.log(fixedDecimalNumbers);

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const addLengthToArray = namesArray.map((name) => `${name}${name.length}`);
console.log(addLengthToArray);

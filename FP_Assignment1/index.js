const numsArray = [10, 5, 8, 4, 6];
const subSquare = numsArray.map((num) => num - num ** 2);
console.log(subSquare);

const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const doubleAndSub = numbsArray.map((num) => (num < 0 ? num - num * 2 : num));
console.log(doubleAndSub);

const sentencesArray = [
  "JavaScript is a powerful programming language.",

  "Web development involves frontend and backend technologies.",

  "Coding is a skill that can be learned and mastered over time.",
];

const sentencesArrayWithCount = sentencesArray.map(
  (sen) => `${sen}${sen.split(" ").length}`
);
console.log(sentencesArrayWithCount);

const cars = [
  { brand: "Toyota", model: "Camry" },

  { brand: "Honda", model: "Accord" },

  { brand: "Ford", model: "Mustang" },
];

const brands = cars.map((car) => car.brand);
console.log(brands);

const movies = [
  { title: "Inception", genre: "Sci-Fi" },

  { title: "The Shawshank Redemption", genre: "Drama" },

  { title: "The Dark Knight", genre: "Action" },
];

const genres = movies.map((movie) => movie.genre);
console.log(genres);

const furniture = [
  { type: "Sofa", width: 200, height: 80 },

  { type: "Table", width: 120, height: 60 },

  { type: "Chair", width: 50, height: 45 },
];

const increaseDiameter = furniture.map((fur) => {
  const increaseWidth = (fur.width + fur.width * 0.1).toFixed(1);
  const increaseHeight = (fur.height + fur.height * 0.1).toFixed(1);
  fur.width = increaseWidth;
  fur.height = increaseHeight;

  return fur;
});

console.log(increaseDiameter);

const products = [
  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Headphones", price: 50 },

  { name: "Camera", price: 300 },
];

const addAffordable = products.map((product) => {
  product.price <= 100
    ? (product.affordable = true)
    : (product.affordable = false);

  return product;
});
console.log(addAffordable);

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
const filterEvenNeg = numbers.filter((num) => num < 0 && num % 2 === 0);
console.log(filterEvenNeg);

const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },

  { name: "Bob", score: 55, activeParticipant: false, club: "History" },

  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
];

const filterStudents = students.filter(
  (student) =>
    (student.score > 70 &&
      student.activeParticipant &&
      student.club === "Math") ||
    student.club === "Science"
);
console.log(filterStudents);

const words = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "pear",
  "orange",
  "strawberry",
];
const filterWords = words.filter(
  (word) => word.includes("a") && word.length > 5
);

console.log(filterWords);

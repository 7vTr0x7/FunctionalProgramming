const students = [
  { name: "Alice", score: 85 },

  { name: "Bob", score: 55 },

  { name: "Charlie", score: 75 },
];

const results = students.map((student) => ({
  ...student,
  passed: student.score > 60,
}));

console.log(results);

const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },

  { title: "Hotel California", duration: 420 },

  { title: "Stairway to Heaven", duration: 482 },
];

const convertIntoMinutes = songs.map((song) => ({
  ...song,
  duration: `${Math.floor(song.duration / 60)}:${song.duration % 60}`,
}));
console.log(convertIntoMinutes);

const employees = [
  { name: "Alice", salary: 50000 },

  { name: "Bob", salary: 60000 },

  { name: "Charlie", salary: 70000 },
];

const calculateAnnualIncome = employees.map((employee) => ({
  ...employee,
  annualIncome: employee.salary * 12,
}));

console.log(calculateAnnualIncome);

const newStudents = [
  { name: "Alice", age: 22 },

  { name: "Bob", age: 17 },

  { name: "Charlie", age: 25 },
];

const check = newStudents.map((student) => ({
  ...student,
  classification: student.age > 18 ? "Adult" : "Minor",
}));

console.log(check);

const newEmployees = [
  { name: "Emily", salary: 60000 },

  { name: "David", salary: 45000 },

  { name: "Grace", salary: 75000 },
];

const empSalary = newEmployees.map((employee) => ({
  ...employee,
  salary: `$${employee.salary}`,
}));
console.log(empSalary);

const products = [
  { name: "Laptop", price: 1200 },

  { name: "Headphones", price: 50 },

  { name: "Smartphone", price: 800 },
];

const productPriceCheck = products.map((product) => ({
  ...product,
  label: product.price >= 100 ? "Expensive" : "Affordable",
}));

console.log(productPriceCheck);

const books = [
  { title: "The Catcher in the Rye", year: 1951 },

  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },

  { title: "The Hunger Games", year: 2008 },
];

const booksPublication = books.map((book) => ({
  ...book,
  category: book.year >= 2000 ? "Modern" : "Classic",
}));

console.log(booksPublication);

const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },

  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },

  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const developersAnnualIncome = developers.map((developer) => ({
  ...developer,
  annualIncome: developer.hourlyRate * developer.hoursPerWeek * 50,
}));

console.log(developersAnnualIncome);

const salesReps = [
  { name: "David", monthlyCommission: 8000 },

  { name: "Helen", monthlyCommission: 10000 },

  { name: "Ivan", monthlyCommission: 6000 },
];

const salesRepsAnnualIncome = salesReps.map((rep) => ({
  ...rep,
  annualIncome: rep.monthlyCommission * 12 + 50000,
}));
console.log(salesRepsAnnualIncome);

const studentsArray = [
  { name: "Alice", score: 85 },

  { name: "Bob", score: 60 },

  { name: "Charlie", score: 92 },
];

const studentsWithGrades = studentsArray.map((student) => {
  if (student.score >= 90) {
    student.grade = "A";
  } else if (student.score >= 80 && student.score < 90) {
    student.grade = "B";
  } else if (student.score >= 70 && student.score < 80) {
    student.grade = "C";
  } else if (student.score >= 60 && student.score < 70) {
    student.grade = "D";
  } else if (student.score <= 59) {
    student.grade = "F";
  }

  return student;
});

console.log(studentsWithGrades);

const students = [
  { name: "Alice", grade: 80 },

  { name: "Bob", grade: 65 },

  { name: "Charlie", grade: 90 },
];

const filterStudents = students.filter((student) => student.grade > 70);
console.log(filterStudents);

const products = [
  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Tablet", price: 500 },
];

const filterProducts = products.filter((product) => product.price < 1000);
console.log(filterProducts);

const employees = [
  { name: "Alice", salary: 60000 },

  { name: "Bob", salary: 45000 },

  { name: "Charlie", salary: 70000 },
];

const filterEmployees = employees.filter((employee) => employee.salary > 50000);
console.log(filterEmployees);

const movies = [
  { title: "Inception", rating: 8.8 },

  { title: "Interstellar", rating: 8.6 },

  { title: "The Dark Knight", rating: 9.0 },
];

const filterMovies = movies.filter((movie) => movie.rating > 7.0);
console.log(filterMovies);

const cars = [
  { brand: "Toyota", year: 2018 },

  { brand: "Honda", year: 2019 },

  { brand: "Ford", year: 2010 },
];

const filterCars = cars.filter(
  (car) => new Date().getFullYear() - 5 === car.year
);
console.log(filterCars);

const studentsArray = [
  { name: "Alice", gpa: 3.8 },

  { name: "Bob", gpa: 3.2 },

  { name: "Charlie", gpa: 3.9 },
];

const filterStudentsByGPA = studentsArray.filter(
  (student) => student.gpa > 3.5
);

console.log(filterStudentsByGPA);

const fruits = [
  { name: "Apple", pricePerPound: 1.5 },

  { name: "Banana", pricePerPound: 2.2 },

  { name: "Orange", pricePerPound: 1.8 },
];

const filterFruits = fruits.filter((fruit) => fruit.pricePerPound < 2.0);
console.log(filterFruits);

const employeesArray = [
  { name: "Alice", employed: true },

  { name: "Bob", employed: false },

  { name: "Charlie", employed: true },
];

const filterEmployed = employeesArray.filter((emp) => emp.employed);
console.log(filterEmployed);

const productsArray = [
  { name: "Laptop", inStock: true },

  { name: "Smartphone", inStock: false },

  { name: "Tablet", inStock: true },
];

const filterProductsArray = productsArray.filter((product) => product.inStock);
console.log(filterProductsArray);

const laptops = [
  { brand: "Dell", screenSize: 14 },

  { brand: "HP", screenSize: 15.6 },

  { brand: "Lenovo", screenSize: 13 },

  { brand: "Acer", screenSize: 17 },
];

const filterLaptops = laptops.filter((laptop) => laptop.screenSize > 15);
console.log(filterLaptops);

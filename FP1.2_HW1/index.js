const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },

  { title: "To Kill a Mockingbird", author: "Harper Lee" },

  { title: "1984", author: "George Orwell" },
];

const titles = books.map((book) => book.title);
console.log(titles);

const fruits = [
  { name: "apple", color: "red" },

  { name: "banana", color: "yellow" },

  { name: "kiwi", color: "brown" },
];

const namesToUpperCase = fruits.map((fruit) => ({
  ...fruit,
  name: fruit.name.toUpperCase(),
}));
console.log(namesToUpperCase);

const employees = [
  { name: "Alice", salary: 50000 },

  { name: "Bob", salary: 60000 },

  { name: "Charlie", salary: 70000 },
];

const increasedEmployeeSalary = employees.map((employee) => ({
  ...employee,
  salary: (employee.salary + employee.salary * 0.1).toFixed(2),
}));

console.log(increasedEmployeeSalary);

const products = [
  { name: "Laptop", price: 1000 },

  { name: "Smartphone", price: 500 },

  { name: "Headphones", price: 100 },
];

const addedDiscount = products.map((product) => ({
  ...product,
  price: product.price - product.price * 0.2,
}));
console.log(addedDiscount);

const cities = [
  { name: "New York", temperature: 25 },

  { name: "Los Angeles", temperature: 30 },

  { name: "Chicago", temperature: 20 },
];

const convertToFahrenheit = cities.map((city) => ({
  ...city,
  temperature: city.temperature * (9 / 5) + 32,
}));

console.log(convertToFahrenheit);

const teachers = [
  { name: "Olivia", monthlySalary: 4500 },

  { name: "Paul", monthlySalary: 5500 },

  { name: "Rachel", monthlySalary: 5000 },
];

const annualIncome = teachers.map((teacher) => ({
  name: teacher.name,
  annualIncome: teacher.monthlySalary * 12 + 500,
}));

console.log(annualIncome);

const countries = [
  { name: "USA", population: 331000000, landArea: 9833517 },

  { name: "India", population: 1393000000, landArea: 2973190 },

  { name: "Brazil", population: 213993437, landArea: 8515767 },
];

const calculatePopulationDensity = countries.map((country) => ({
  name: country.name,
  populationDensity: country.population / country.landArea,
}));

console.log(calculatePopulationDensity);

const smartphones = [
  { brand: "iPhone", year: 2019, cameraResolution: 12.2 },

  { brand: "Samsung", year: 2021, cameraResolution: 13 },

  { brand: "Google Pixel", year: 2018, cameraResolution: 11 },
];

const filterSmartphones = smartphones.filter(
  (smartphone) => smartphone.cameraResolution > 12 && smartphone.year > 2020
);
console.log(filterSmartphones);

const books = [
  { title: "The Da Vinci Code", year: 2003, pages: 454 },

  { title: "The Alchemist", year: 1988, pages: 197 },

  { title: "The Hunger Games", year: 2008, pages: 374 },
];

const filterBooks = books.filter(
  (book) => book.year > 2005 && book.pages < 400
);
console.log(filterBooks);

const students = [
  { name: "Alice", age: 20, gpa: 3.8 },

  { name: "Bob", age: 17, gpa: 3.2 },

  { name: "Charlie", age: 19, gpa: 3.9 },
];

const filterStudents = students.filter(
  (student) => student.age > 18 && student.gpa > 3.5
);
console.log(filterStudents);

const employees = [
  { name: "Emily", salary: 55000, hireYear: 2008 },

  { name: "David", salary: 48000, hireYear: 2012 },

  { name: "Grace", salary: 60000, hireYear: 2006 },
];

const filterEmployees = employees.filter(
  (emp) => emp.salary > 50000 && emp.hireYear > 2010
);
console.log(filterEmployees);

const products = [
  { name: "Laptop", price: 1200, inStock: true },

  { name: "Headphones", price: 50, inStock: false },

  { name: "Smartphone", price: 800, inStock: true },
];

const filterProducts = products.filter(
  (product) => product.price > 100 && product.inStock
);

console.log(filterProducts);

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },

  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },

  { title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure" },

  { title: "The Dune", year: 2018, rating: 6.0, genre: "Action" },
];

const filterMovies = movies.filter(
  (movie) => movie.year > 2010 && movie.rating > 8.0 && movie.genre === "Action"
);

console.log(filterMovies);

const apartments = [
  { location: "Downtown", price: 1600, bedrooms: 2, safeNeighbourhood: true },

  { location: "Suburb", price: 1400, bedrooms: 1, safeNeighbourhood: false },

  {
    location: "City Center",
    price: 1800,
    bedrooms: 3,
    safeNeighbourhood: true,
  },
];

const filterApartments = apartments.filter(
  (apart) => apart.bedrooms > 2 && apart.safeNeighbourhood && apart.price > 1500
);

console.log(filterApartments);

const productsArray = [
  {
    name: "Laptop",
    price: 800,
    onlineAvailability: true,
    category: "Electronics",
  },

  {
    name: "Book",
    price: 20,
    onlineAvailability: false,
    category: "Literature",
  },

  { name: "Book", price: 40, onlineAvailability: false, category: "Classic" },

  {
    name: "Headphones",
    price: 60,
    onlineAvailability: true,
    category: "Electronics",
  },
];

const filterProductsArray = productsArray.filter(
  (product) =>
    product.price > 50 &&
    product.onlineAvailability &&
    product.category === "Electronics"
);

console.log(filterProductsArray);

const jobApplicants = [
  {
    name: "Alice",
    experienceYears: 4,
    englishProficiency: true,
    relevantDegree: true,
  },

  {
    name: "Bob",
    experienceYears: 2,
    englishProficiency: false,
    relevantDegree: true,
  },

  {
    name: "Charlie",
    experienceYears: 5,
    englishProficiency: true,
    relevantDegree: false,
  },
];

const filterJobApplicants = jobApplicants.filter(
  (applicant) =>
    applicant.experienceYears > 3 &&
    applicant.englishProficiency &&
    applicant.relevantDegree
);

console.log(filterJobApplicants);

const restaurants = [
  {
    name: "Gourmet Grill",
    stars: 4.5,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Fast Noodles",
    stars: 3.8,
    vegetarianOptions: false,
    location: "Suburb",
  },

  {
    name: "Healthy Bites",
    stars: 4.2,
    vegetarianOptions: true,
    location: "City",
  },

  {
    name: "Chat Street",
    stars: 3.5,
    vegetarianOptions: false,
    location: "Suburb",
  },
];

const filterRestaurants = restaurants.filter(
  (res) => res.stars > 4 && res.vegetarianOptions && res.location === "City"
);

console.log(filterRestaurants);

const booksArray = [
  { title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery" },

  { title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama" },

  { title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller" },
];

const filterBooksArray = booksArray.filter(
  (book) =>
    (book.year > 2000 && book.rating > 7.5 && book.genre === "Mystery") ||
    book.genre === "Thriller"
);

console.log(filterBooksArray);

const employeesArray = [
  {
    name: "David",
    experienceYears: 6,
    englishProficiency: true,
    department: "Engineering",
  },

  {
    name: "Emma",
    experienceYears: 4,
    englishProficiency: false,
    department: "Finance",
  },

  {
    name: "Alex",
    experienceYears: 7,
    englishProficiency: true,
    department: "Marketing",
  },
];

const filterEmployeesArray = employeesArray.filter(
  (emp) =>
    (emp.experienceYears > 5 &&
      emp.englishProficiency &&
      emp.department === "Engineering") ||
    emp.department === "Marketing"
);

console.log(filterEmployeesArray);

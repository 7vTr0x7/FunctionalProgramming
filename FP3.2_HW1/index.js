const data = [
  { key: "item", value: "Pencil" },

  { key: "price", value: 250 },

  { key: "inStock", value: true },
];

const transformedData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedData);

const students = [
  { item: "Pen", color: "blue" },

  { item: "Pen", color: "black" },

  { item: "Pen", color: "red" },
];

const colorsArray = students.reduce((acc, curr) => {
  acc.push(curr.color);
  return acc;
}, []);

console.log(colorsArray);

const countries = [
  { item: "Car", manufacturingCity: "New York" },

  { item: "Car", manufacturingCity: "Los Angeles" },

  { item: "Car", manufacturingCity: "Chicago" },
];

const citiesArray = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity);
  return acc;
}, []);
console.log(citiesArray);

const groceryItems = [
  { item: "Fruit", name: "Apple" },

  { item: "Fruit", name: "Banana" },

  { item: "Fruit", name: "Orange" },
];

const fruitsArray = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);

console.log(fruitsArray);

const details = [
  { key: "category", value: "Electronics" },

  { key: "rating", value: 4.5 },

  { key: "available", value: true },
];

const transformedDetails = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedDetails);

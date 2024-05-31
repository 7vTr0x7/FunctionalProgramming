const productInfo = [
  { key: "name", value: "Laptop" },

  { key: "price", value: 12000 },

  { key: "brand", value: "Dell" },
];

const transformedInfo = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedInfo);

const colleges = [
  { item: "Book", university: "Harvard" },

  { item: "Book", university: "MIT" },

  { item: "Book", university: "Stanford" },
];

const universities = colleges.reduce((acc, curr) => {
  acc.push(curr.university);
  return acc;
}, []);
console.log(universities);

const userPreferences = [
  { key: "theme", value: "Dark Mode" },

  { key: "fontSize", value: 16 },

  { key: "notifications", value: true },
];

const transformed = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformed);

const continents = [
  { key: "Asia", country: "India" },

  { key: "Europe", country: "France" },

  { key: "North America", country: "USA" },
];

const transformedContinentData = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country;
  return acc;
}, {});

console.log(transformedContinentData);

const information = [
  { key: "city", value: "New York" },

  { key: "population", value: 8398748 },

  { key: "area", value: 468.9 },
];

const transformedInformation = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(transformedInformation);

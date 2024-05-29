const products = [
  { id: 1, name: "Laptop", price: 19990 },
  { id: 2, name: "Smart Phone", price: 29990 },
  { id: 3, name: "Headphone", price: 5990 },
  { id: 4, name: "Tablet", price: 9990 },
];

const productList = document.querySelector("#productList");

const productHTML = products.map(
  (product) =>
    `
<div>
<strong>Id</strong>: ${product.id} <br/>
<strong>Name</strong>: ${product.name} <br/>
<strong>Price</strong>: ${product.price} <br/>
<hr/>
</div>
`
);

productList.innerHTML = productHTML.join("");

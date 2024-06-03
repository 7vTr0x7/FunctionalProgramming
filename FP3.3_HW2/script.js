const items = [
  { id: 1, item: "Item 1", price: 10 },

  { id: 2, item: "Item 2", price: 20 },

  { id: 3, item: "Item 3", price: 15 },

  { id: 4, item: "Item 4", price: 25 },
];

const itemList = document.querySelector("#itemList");
const totalCost = document.querySelector("#totalCost");
const averageCost = document.querySelector("#averageCost");

const itemsList = items.reduce(
  (acc, curr) => {
    const li = document.createElement("li");
    li.textContent = `${curr.item} - $${curr.price}`;

    itemList.appendChild(li);

    acc.totalCost += curr.price;
    return acc;
  },
  { totalCost: 0 }
);

totalCost.textContent = `$${itemsList.totalCost}`;
averageCost.textContent = `$${itemsList.totalCost / items.length}`;

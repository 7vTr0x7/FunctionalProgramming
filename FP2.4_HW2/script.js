const items = [
  { id: 1, item: "Item 1", status: "In Sale" },

  { id: 2, item: "Item 2", status: "New Release" },

  { id: 3, item: "Item 3", status: "New Release" },

  { id: 4, item: "Item 4", status: "In Sale" },

  { id: 5, item: "Item 5", status: "In Sale" },
];

const itemList = document.querySelector("#itemList");
const itemStatus = document.getElementsByName("itemStatus");

const renderItems = (status) => {
  const filterTasks =
    status === "all" ? items : items.filter((item) => item.status === status);

  const itemHTML = filterTasks.map(
    (item) => `
    <li>
    <b>ID: </b>${item.id} <br/>
    <b>Item: </b>${item.item} <br/>
    <b>Status: </b>${item.status} <br/>
  </li>
  <hr/>
    `
  );

  itemList.innerHTML = itemHTML.join("");
};

renderItems("all");

itemStatus.forEach((radioBtn) => {
  radioBtn.addEventListener("click", function () {
    renderItems(this.value);
  });
});

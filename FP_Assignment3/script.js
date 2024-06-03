const expenses = [
  { id: 1, name: "Groceries", amount: 150 },

  { id: 2, name: "Utilities", amount: 80 },

  { id: 3, name: "Dining Out", amount: 120 },

  { id: 4, name: "Transportation", amount: 50 },
];

const expenseList = document.querySelector("#expenseList");
const totalExpense = document.querySelector("#totalExpense");
const filterByAmount = document.querySelector("#filterByAmount");

const renderData = (expenses) => {
  const expenseListHtml = expenses.map(
    (expense) =>
      `  <li>
         <b>Expense: </b>${expense.name} <br/>
         <b>Amount: </b>$${expense.amount} <br/>
         </li>
         <hr />
        `
  );

  expenseList.innerHTML = expenseListHtml.join("");

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  totalExpense.textContent = `$${total.toFixed(2)}`;
};

const filterExpenses = (expenses) => {
  const filteredData = expenses.filter((expense) => expense.amount > 100);
  renderData(filteredData);
};

filterByAmount.addEventListener("change", () => {
  if (filterByAmount.checked) {
    filterExpenses(expenses);
  } else {
    renderData(expenses);
  }
});

renderData(expenses);

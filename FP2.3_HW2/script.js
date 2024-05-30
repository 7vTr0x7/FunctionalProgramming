const employeeData = [
  { id: 1, name: "Alice", experienceInYears: 2 },

  { id: 2, name: "Bob", experienceInYears: 9 },

  { id: 3, name: "Charlie", experienceInYears: 4 },

  { id: 4, name: "John", experienceInYears: 19 },
];

const employeeList = document.querySelector("#employeeList");
const filterByExp = document.querySelector("#filterByExp");

const renderEmployees = (checked) => {
  const filteredEmp = checked
    ? employeeData.filter((emp) => emp.experienceInYears > 5)
    : employeeData;

  const employeesInfo = filteredEmp.map(
    (emp) =>
      `
    <li>
     <b>ID: </b>${emp.id} <br/>
     <b>Name: </b>${emp.name} <br/>
     <b>Experience: </b>${emp.experienceInYears} <br/>
    </li>
    <hr/>
    `
  );

  employeeList.innerHTML = employeesInfo.join("");
};

renderEmployees(false);

filterByExp.addEventListener("change", () => {
  renderEmployees(filterByExp.checked);
});

const tasks = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "inProgress" },
  { id: 3, title: "Task 3", status: "completed" },
  { id: 4, title: "Task 4", status: "todo" },
];

const taskList = document.querySelector("#taskList");
const taskStatus = document.querySelector("#taskStatus");

const renderTasks = (status) => {
  const filteredTasks =
    status === "All" ? tasks : tasks.filter((task) => status === task.status);

  const taskDetails = filteredTasks.map(
    (task) =>
      `
    <li>
    <b>ID: </b>${task.id} <br/>
    <b>Title: </b>${task.title} <br/>
    <b>Status: </b>${task.status} <br/>
    </li>
    <hr/>
    `
  );

  taskList.innerHTML = taskDetails.join("");
};

renderTasks(taskStatus.value);

taskStatus.addEventListener("change", () => {
  renderTasks(taskStatus.value);
});

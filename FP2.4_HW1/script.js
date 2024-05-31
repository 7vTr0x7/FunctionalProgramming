const tasks = [
  { id: 1, task: "Task 1", status: "todo" },

  { id: 2, task: "Task 2", status: "completed" },

  { id: 3, task: "Task 3", status: "inProgress" },

  { id: 4, task: "Task 4", status: "todo" },

  { id: 5, task: "Task 5", status: "completed" },
];

const taskList = document.querySelector("#taskList");
const taskStatus = document.getElementsByName("taskStatus");

const renderTasks = (status) => {
  const filteredTasks =
    status === "all" ? tasks : tasks.filter((task) => task.status === status);

  const tasksHTML = filteredTasks.map(
    (task) => `
      <li>
        <b>ID: </b>${task.id} <br/>
        <b>Task: </b>${task.task} <br/>
        <b>Status: </b>${task.status} <br/>
      </li>
      <hr/>
    `
  );

  taskList.innerHTML = tasksHTML.join("");
};

renderTasks("all");

taskStatus.forEach((radioBtn) => {
  radioBtn.addEventListener("click", function () {
    renderTasks(this.value);
  });
});

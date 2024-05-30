const tasks = [
  { id: 1, task: "Task 1", status: "Completed" },
  { id: 2, task: "Task 2", status: "Pending" },
  { id: 3, task: "Task 3", status: "Completed" },
  { id: 4, task: "Task 4", status: "Pending" },
  { id: 5, task: "Task 5", status: "Not started" },
];

const filterPendingTasks = tasks.filter((task) => task.status === "Pending");
console.log(filterPendingTasks);

const filterNotCompletedTasks = tasks.filter(
  (task) => task.status !== "Completed"
);
console.log(filterNotCompletedTasks);

const books = [
  { id: 1, name: "Book 1", year: 2005, pages: 250 },
  { id: 2, name: "Book 2", year: 2012, pages: 400 },
  { id: 3, name: "Book 3", year: 2015, pages: 200 },
  { id: 4, name: "Book 4", year: 2008, pages: 350 },
];

const filterBooks = books.filter(
  (book) => book.year > 2010 && book.pages > 300
);
console.log(filterBooks);

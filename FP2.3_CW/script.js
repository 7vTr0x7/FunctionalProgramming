const books = [
  { id: 1, name: "Book 1", price: 9.99, isFree: false },
  { id: 2, name: "Book 2", price: 0.0, isFree: true },
  { id: 3, name: "Book 3", price: 19.99, isFree: false },
  { id: 4, name: "Book 4", price: 0.0, isFree: true },
];

const bookList = document.querySelector("#bookList");
const isFreeCheckbox = document.querySelector("#isFreeCheckbox");

const renderBooks = (isFreeBook) => {
  const filteredBooks = isFreeBook
    ? books.filter((book) => book.isFree)
    : books;

  const booksInfo = filteredBooks.map(
    (book) =>
      `
<li>
  <b>ID: </b>${book.id} <br/>
  <b>Name: </b>${book.name} <br/>
  <b>Price: </b>${book.price} <br/>
</li>
<hr/>
`
  );

  bookList.innerHTML = booksInfo.join("");
};

renderBooks(false);

isFreeCheckbox.addEventListener("change", () => {
  renderBooks(isFreeCheckbox.checked);
});

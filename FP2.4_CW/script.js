const movies = [
  { id: 1, title: "Movie 1", genre: "action" },
  { id: 2, title: "Movie 2", genre: "comedy" },
  { id: 3, title: "Movie 3", genre: "drama" },
  { id: 4, title: "Movie 4", genre: "action" },
  { id: 5, title: "Movie 5", genre: "comedy" },
];

const movieList = document.querySelector("#movieList");
const filterByGenre = document.getElementsByName("genre");

const renderMovies = (genre) => {
  const filteredMovies =
    genre === "all" ? movies : movies.filter((movie) => genre === movie.genre);
  console.log(filteredMovies);
  console.log(genre);

  const moviesInfo = filteredMovies.map(
    (movie) =>
      `
     <li>
      <b>Id: </b>${movie.id} <br/>
      <b>Title: </b>${movie.title} <br/>
      <b>Genre: </b>${movie.genre} <br/>
     </li>
     <hr/>
    `
  );

  movieList.innerHTML = moviesInfo.join("");
};

renderMovies("all");

filterByGenre.forEach((radioBtn) => {
  radioBtn.addEventListener("change", function () {
    renderMovies(this.value);
  });
});

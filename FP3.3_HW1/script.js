const movies = [
  { id: 1, title: "Movie 1", genre: "action" },

  { id: 2, title: "Movie 2", genre: "drama" },

  { id: 3, title: "Movie 3", genre: "action" },

  { id: 4, title: "Movie 4", genre: "comedy" },
];

const moviesListContainer = document.querySelector("#moviesList");
const genreGroup = document.querySelector("#genreGroup");

const movieList = movies.reduce((acc, curr) => {
  const li = document.createElement("li");
  li.textContent = `${curr.title} - Rating: ${curr.genre}`;
  moviesListContainer.appendChild(li);

  if (!acc[curr.genre]) {
    acc[curr.genre] = { genre: curr.genre, movies: [] };
  }
  acc[curr.genre].movies.push(curr.title);
  return acc;
}, {});

const genreHtml = Object.values(movieList)
  .map(
    (genreObj) => `
    <b>Genre: </b>${genreObj.genre}
    <br>
    <b>Movies: </b>${genreObj.movies.join(", ")}
<hr/>
`
  )
  .join("");

genreGroup.innerHTML = genreHtml;

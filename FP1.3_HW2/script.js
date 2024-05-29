const movies = [
  { id: 1, name: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { id: 2, name: "The Godfather ", genre: "Crime", year: 1972 },
  { id: 3, name: "The Dark Knight ", genre: "Action", year: 2008 },
  { id: 4, name: "The Pulp Fiction ", genre: "Crime", year: 1994 },
];

const movieList = document.querySelector("#movieList");

const movieInfoHTML = movies.map(
  (movie) => `
<div>
<strong>ID:</strong> ${movie.id} <br/>
<strong>Name:</strong> ${movie.name} <br/>
<strong>Genre:</strong> ${movie.genre} <br/>
<strong>Year:</strong> ${movie.year} <br/>
<hr/>
</div>
`
);

movieList.innerHTML = movieInfoHTML.join("");

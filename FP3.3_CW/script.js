const movies = [
  { id: 1, title: "movie 1", rating: 4.5 },
  { id: 2, title: "movie 2", rating: 3.8 },
  { id: 3, title: "movie 3", rating: 4.2 },
  { id: 4, title: "movie 4", rating: 3.5 },
];

const moviesListContainer = document.querySelector("#moviesList");
const averageRating = document.querySelector("#averageRating");

const movieList = movies.reduce(
  (acc, curr) => {
    acc.totalRating += curr.rating;

    const li = document.createElement("li");
    li.textContent = `${curr.title} - Rating: ${curr.rating}`;
    moviesListContainer.appendChild(li);

    return acc;
  },
  { totalRating: 0 }
);

const avgRating = movieList.totalRating / movies.length;
averageRating.textContent = avgRating;

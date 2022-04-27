const moviesBauen = (movie) => {
  return `<div class="movie">
              <span>${movie.Title} (${movie.Year})</span>
          </div>`;
};
// titel und year
// API link ist hier ++++++++++++++++++++++++++++++++++
const fetchMoviesAsync = (title = "", year = "") => {
  const apiroute =
    "http://www.omdbapi.com/?i=tt3896198&apikey=7309c0b3&s=${s}&y=${y}";
  fetch(apiroute + `s=${title}&y=${year}&type=movie`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.Search.forEach((movie) => {
        document
          .getElementById("movies")
          .insertAdjacentHTML("beforeend", moviesBauen(movie));
      });
    });
};
// onclick ist hier
document.getElementById("getMovies").onclick = () => {
  document.getElementById("movies").innerHTML = "";
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  fetchMoviesAsync(title, year);
};

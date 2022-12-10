const APILINK =
  "https://api.themoviedb.org/3/discover/movie?api_key=6b35c735ccbc47fd782c3171f343d778&language=en-US&sort_by=popularity.desc";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=6b35c735ccbc47fd782c3171f343d778&query=";

const form = document.getElementById("form");
const search = document.getElementById("query");
const main = document.getElementById("section");

showMovies(APILINK);
function showMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data.results);

      data.results.forEach((result) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        const image = document.createElement("img");
        image.setAttribute("class", "thumnail");
        const title = document.createElement("h3");
        title.setAttribute("class", "title");

        card.appendChild(image);
        card.appendChild(title);
        column.appendChild(card);
        row.appendChild(column);

        main.appendChild(row);

        image.src = IMAGE_PATH + result.poster_path;
        title.innerHTML = `${result.title}`;
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value.trim();

  if (searchItem) {
    showMovies(SEARCHAPI + search.value);
    search.value = "";
  }
});

const query = document.getElementById("query");
const submit = document.getElementById("submit");
const output = document.getElementById("results");

submit.onclick = async (element) => {
  element.preventDefault();
  const value_from_input = query.value;
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${value_from_input}`
  );
  const shows = await response.json();
  console.log(shows);
  for (const result of shows) {
    const article = document.createElement("article");
    const show = result.show;

    article.innerHTML = `
            <h2><a href=${show.url} target="_blank">${show.name}</a></h2>
            <img src="${show.image?.medium}" alt="${show.name}">
            <div>${show.summary}</div>
        `;

    output.appendChild(article);
  }
};

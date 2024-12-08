const query = document.getElementById("query");
const submit = document.getElementById("submit");

submit.onclick = async (element) => {
  element.preventDefault();
  const value_from_input = query.value;
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${value_from_input}`
  );
  const result = await response.text();
  console.log(JSON.parse(result));
};

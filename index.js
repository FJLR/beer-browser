fetch("https://api.punkapi.com/v2/beers")
  .then((resp) => resp.json())
  .then((beers) => {
    console.log(beers);
    const listCountElement = document.createElement("div");
    listCountElement.textContent = `There are ${beers.length} beers to list!`;
    document.getElementById("temp").append(listCountElement);
  });

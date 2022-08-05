const searchBar = document.querySelector("#input-search");

searchBar.addEventListener("", () => {
  console.log(document.getElementsByTagName(""));
});

axios("https://jsonplaceholder.typicode.com/photos?_limit=50").then(
  ({ data }) => {
    console.log(data);
    const cardBody = document.querySelector(".cardContainer");

    data.forEach((e) => {
      const a = document.createElement("button");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      li.className = "card";
      li.id = e.id;

      a.classList = "delete";
      a.addEventListener("click", removing);
      function removing() {
        li.remove();
      }
      a.innerHTML = "Remove";

      img.classList = "cardImg";

      p.classList = "titles";
      p.innerHTML = e.title;

      li.appendChild(a);
      li.appendChild(img);
      li.appendChild(p);

      cardBody.appendChild(li);
    });
  }
);

const toAdd = document.querySelector("#add");
toAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const ID = document.querySelector("#id");
  const title = document.querySelector("#title");
  const bodyDiv = document.querySelector(".cardContainer");
  const li = document.createElement("li");
  const a = document.createElement("button");
  const img = document.createElement("img");
  const p = document.createElement("p");

  if (title.value !== "") {
    li.className = "card ordered";
    li.id = ID.value;

    a.classList = "delete";
    a.addEventListener("click", removing);
    function removing() {
      li.remove();
    }
    a.innerHTML = "X";

    img.classList = "cardImg";
    img.setAttribute("src", "https://via.placeholder.com/600/771796");
  }
});

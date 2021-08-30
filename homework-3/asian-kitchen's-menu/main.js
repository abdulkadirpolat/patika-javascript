const menuContainer = document.querySelector(".menu-container");
const buttons = document.querySelector(".buttons");

fetch("asian_kitchen.json")
  .then((response) => response.json())
  .then((json) => {
    return jsonData(json), loadedData(json);
  })
  .catch((error) => console.log(error));

function items(item) {
  let menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.innerHTML = 
  `<div class="card-image"> <img class="card-img"src="${item.img}"/>
  </div>
  <div class="menu-info">
    <div class="menu-title">
      <h2>${item.title}</h2>
      <h2>${item.price}</h2>
    </div>
    <div class="about">${item.desc}</div>
  </div>`;
  menuContainer.append(menuItem);
}

function loadedData(e) {
  e.map((item) => {
    return items(item);
  });
}

function deleteItems() {
  menuContainer.innerHTML = "";
}

function jsonData(asianData) {
  buttons.addEventListener("click", (e) => {
    let clickId = e.target.id;

    if (e.target.className == "buttons") {
      return;
    } else if (clickId == "all") {
      deleteItems();
      asianData.map((item) => {
        return items(item);
      });
    } else if (clickId === "korea" || "japan" || "china") {
      deleteItems();
      asianData
        .filter(
          (f) => f.category == `${clickId[0].toUpperCase()}${clickId.slice(1)}`
        )
        .map((item) => {
          return items(item);
        });
    }
  });
}

const container = document.getElementById("container");
const newGridBtn = document.getElementById("newGridBtn");
let gridNum = 0;

function makeRows(gridNum) {
  container.style.setProperty("--grid-num", gridNum);
  for (c = 0; c < gridNum ** 2; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  document.querySelectorAll(".grid-item").forEach((element) => {
    element.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "gray";
    });
  });
}

newGridBtn.addEventListener("click", () => {
  clearGrid();
  gridNum = prompt("How many rows and columns would you like?", gridNum);
  makeRows(gridNum);
});

function clearGrid() {
  container.innerHTML = "";
}

makeRows(16);

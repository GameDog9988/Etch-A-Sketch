let container = document.getElementById("container");
let sketchGrid = "";

for (i = 0; i < 17; i++) {
  sketchGrid += '<div class="box"></div>';
}
container.innerHTML = sketchGrid;

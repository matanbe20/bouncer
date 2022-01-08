var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.shadowBlur = 8;
ctx.shadowColor = "#3b3b3d";
ctx.fillStyle = "#636469";
let x = 0;
let y = 0;
let isReverse = false;
let isUpsideDown = false;

setInterval(function () {
  update();
}, 1000/60);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(x, y);

  if (x + 20 > canvas.width) isReverse = true;
  if (x <= 0) isReverse = false;
  x = isReverse ? x - 1.1 : x + 1.1;

  if (y + 20 > canvas.height ) isUpsideDown = true;
  if (y <= 0) isUpsideDown = false;

  y = isUpsideDown ? y - 1 : y + 1;
  
}

function drawRect(x, y) {
  ctx.fillRect(x, y, 20, 20);
}

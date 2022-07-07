 
function getArea(width, heigth) {
  return width * heigth;
}

var msg = getArea(10, 12);

var el = document.getElementById('message');
el.textContent = msg;
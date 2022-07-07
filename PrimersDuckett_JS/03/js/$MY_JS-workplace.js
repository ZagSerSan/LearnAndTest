// Объявление функции
function getArea(width, heigth) {
  return width * heigth;
}

// Вызов функции
var msg = getArea(10, 12);

// Вывод данных
var el = document.getElementById('message');
el.textContent = msg;
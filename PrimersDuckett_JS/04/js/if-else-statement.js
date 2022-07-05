var pass = 50;      // Проходной балл
var score = 75;    // Актуальный балл
var msg;            // Сообщение

// Выбор сообщения для вывода на экран в зависимости от количества баллов

if (score > pass) {
  msg = 'Поздравления, пройдено!';
} else {
  msg = 'Повторите попытку!';
}

var el = document.getElementById('answer');
el.textContent = msg;
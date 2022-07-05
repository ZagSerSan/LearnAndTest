var msg;        // Сообщение
var level = 2;  // Уровень

// Определяем сообщение в зависимости от уровня
switch (level) {
case 1:
    msg = 'Удачи на первом этапе!';
    break;

case 2:
    msg = 'Второй из трех - продолжаем!';
    break;

case 3:
    msg = 'Финальный этап, соберитесь!';
    break;

default:
    msg = 'Удачи!';
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;
var score1 = 8;   // Балл за первый этап
var score2 = 8;   // Балл за второй этап
var pass1 = 6;    // Проходной балл за первый этап
var pass2 = 6;    // Проходной балл за второй этап

// Проверяем, прошел ли пользователь оба этапа, результат сохраняем в переменной
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Создаем сообщение
var msg = 'Оба этапа пройдены: ' + passBoth;

// Выводим сообщение на страницу
var el = document.getElementById('answer');
el.innerHTML = msg;
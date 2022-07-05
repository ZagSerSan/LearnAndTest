var score1 = 90;     // Балл за первый этап
var score2 = 95;     // Балл за второй этап
var highScore1 = 75; // Рекорд за первый этап
var highScore2 = 95; // Рекорд за второй этап

// Проверяем, превышают ли набранные очки актуальные рекорды
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Выводим сообщение на страницу
var el = document.getElementById('answer');
el.innerHTML = 'Новый рекорд: ' + comparison;
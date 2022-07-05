var score = 75;    // Балл
var msg = '';      // Сообщение

function congratulate() {
  msg += 'Поздравляем! ';
}

if (score >= 50) {  // Если балл составляет 50 или выше 
  congratulate();
  msg += 'Переходите к следующему этапу.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;
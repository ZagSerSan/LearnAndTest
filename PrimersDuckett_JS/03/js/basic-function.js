﻿// Создаем переменную с именем msg для хранения сообщения
var msg = 'Подпишитесь на нашу рассылку и получите скидку 10%!';

// Создаем функцию для обновления содержимого элемента, которому в качестве идентификатора присвоено сообщение (message)
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// Вызываем функцию
updateMessage();
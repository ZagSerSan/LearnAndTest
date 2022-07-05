var elUsername = document.getElementById('username');   // Получаем введенное имя пользователя
var elMsg      = document.getElementById('feedback');   // Получаем элемент для обратной связи

function checkUsername(minLength) {                     // Объявляем функцию
  if (elUsername.value.length < minLength) {            // Если имя пользователя слишком короткое
    // Задаем сообщение об ошибке
    elMsg.innerHTML = 'Имя пользователя должно содержать не менее ' + minLength + ' символов';
  } else {                                             // Иначе
    elMsg.innerHTML = '';                              // Сбрасываем сообщение
  }
}

elUsername.addEventListener('blur', function() {        // Когда элемент выходит из фокуса
  checkUsername(5);                                     // Здесь передаем аргументы
}, false);
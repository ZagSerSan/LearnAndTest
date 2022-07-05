function checkUsername() {                             // Объявляем функцию
  var elMsg = document.getElementById('feedback');     // Получаем элемент обратной связи
  if (this.value.length < 5) {                         // Если имя пользователя слишком короткое
    elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов'; // Указываем сообщение
  } else {                                             // Иначе
    elMsg.textContent = '';                            // Сбрасываем сообщение
  }
}

var elUsername = document.getElementById('username');  // Получаем имя, введенное пользователем
// При выходе элемента из фокуса вызвать функцию checkuserName()
elUsername.addEventListener('blur', checkUsername, false);
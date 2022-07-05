var elUsername = document.getElementById('username');  // Получаем имя, введенное пользователем
var elMsg = document.getElementById('feedback');       // Получаем элемент обратной связи 

function checkUsername(minLength) {                    // Объявляем функцию
  if (elUsername.value.length < minLength) {           // Если имя пользователя слишком короткое
    // Set message
    elMsg.innerHTML = 'Имя пользователя должно содержать не менее ' + minLength + ' символов';
  } else {                                             // Иначе
    elMsg.innerHTML = '';                              // Сбрасываем сообщение
  }
}

if (elUsername.addEventListener) {               // Если слушатель событий поддерживается
  elUsername.addEventListener('blur', function(){// Когда имя пользователя выходит из фокуса
    checkUsername(5);                            // Вызываем функцию checkUsername()
  }, false);                                     // Захватываем результат на этапе всплытия события
} else {                                         // Иначе
  elUsername.attachEvent('onblur', function(){   // Используем код отката для Internet Explorer: onblur
    checkUsername(5);                            // Вызываем функцию checkUsername()
  });
}
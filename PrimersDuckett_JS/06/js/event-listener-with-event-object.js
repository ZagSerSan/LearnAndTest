function checkLength(e, minLength) {         // Объявляем функцию
  var el, elMsg;                             // Объявляем переменные
  if (!e) {                                  // Если объект event не существует
    e = window.event;                        // Используем код отката для старых версий IE 
  }
  el = e.target || e.srcElement;             // Получаем цель события
  elMsg = el.nextSibling;                    // Получаем следующий смежный элемент этого элемента

  if (el.value.length < minLength) {         // Если текст слишком короткий – задаем сообщение
    elMsg.innerHTML = 'Имя пользователя должно содержать не менее ' + minLength + ' символов';
  } else {                                   // Иначе
    elMsg.innerHTML = '';                    // Сбрасываем сообщение
  }
}

var elUsername = document.getElementById('username');// Получаем имя, введенное пользователем
if (elUsername.addEventListener) {           // Если слушатель событий поддерживается
  elUsername.addEventListener('blur', function(e) {  // Событие blur
    // ПРИМЕЧАНИЕ: Используется функция checkLength(), а не checkUsername()
    checkLength(e, 5);                             // Вызываем функцию checkLength()
  }, false);                                       // Захватываем на этапе всплывания
} else {                                           // Иначе
  elUsername.attachEvent('onblur', function(e) {   // Код отката для IE: onblur
    // ПРИМЕЧАНИЕ: Используется функция checkLength(), а не checkUsername()
    checkLength(e, 5);                             // Вызываем функцию checkLength()
  });
}
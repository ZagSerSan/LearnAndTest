function setup() {                                  // Объявляем функцию
  var textInput;                                    // Создаем переменную
  textInput = document.getElementById('username');  // Получаем имя, введенное пользователем
  textInput.focus();                                // Помещаем имя пользователя в фокус
}

window.addEventListener('load', setup, false); // Когда страница загрузится, вызываем функцию setup()


/* ВАРИАНТ ДЛЯ СОВМЕСТИМОСТИ С БРАУЗЕРОМ IE8 (и версии ниже)

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/
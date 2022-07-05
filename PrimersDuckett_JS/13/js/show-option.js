(function() {
  var form, options, other, otherText, hide;           // Объявляем переменные
  form      = document.getElementById('how-heard');    // Получаем форму
  options   = form.elements.heard;                     // Получаем переключатели
  other     = document.getElementById('other');        // Переключатель "Другое"
  otherText = document.getElementById('other-text');   // Поле ввода "Другое"
  otherText.className = 'hide';                        // Скрываем поле ввода

  for (var i = [0]; i < options.length; i++) {         // Перебираем переключатели
    addEvent(options[i], 'click', radioChanged);       // Добавляем обработчик событий
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';                // Выбран ли вариант "Другое"?
    otherText.className = hide;                        // Отображаем/скрываем поле ввода
    if (hide) {                                        // Если поле ввода скрыто
      otherText.value = '';                            // Сбрасываем его содержимое
    }
  }
}());
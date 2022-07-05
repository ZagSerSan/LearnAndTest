(function() {
  var form     = document.getElementById('interests'); // Получаем форму
  var elements = form.elements;                      // Все элементы формы
  var options  = elements.genre;                     // Массив: флажки с жанрами
  var all      = document.getElementById('all');     // Флажок "Любые"

  function updateAll() {
    for (var i = 0; i < options.length; i++) {       // Перебираем флажки
      options[i].checked = all.checked;              // Обновляем свойство checked
      console.log(options[i].name);
    }
  }
  addEvent(all, 'change', updateAll);                // Добавляем обработчик событий

  function clearAllOption(e) {
    var target = e.target || e.srcElement;           // Получаем цель события
    if (!target.checked) {                           // Если флажок не установлен
      all.checked = false;                           // Сбрасываем флажок "Любые"
    }
  }
  for (var i = 0; i < options.length; i++) {         // Перебираем флажки
    addEvent(options[i], 'change', clearAllOption);  // Добавляем обработчик событий
  }

}());
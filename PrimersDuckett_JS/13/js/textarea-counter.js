(function () {
  var bio      = document.getElementById('bio'),        // Элемент textarea
      bioCount = document.getElementById('bio-count');  // Счетчик символов

  addEvent(bio, 'focus', updateCounter);       // Вызываем updateCounter() при получении фокуса
  addEvent(bio, 'input', updateCounter);       // Вызываем updateCounter() при вводе

  addEvent(bio, 'blur', function () {          // Когда оставляем элемент
    if (bio.value.length <= 140) {             // Если биография слишком длинная
      bioCount.className = 'hide';             // Прячем счетчик
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;      // Получаем целевой элемент события
    var count = 140 - target.value.length;      // Сколько символов осталось
    if (count < 0) {                            // Если осталось меньше 0 символов
      bioCount.className = 'error';             // Добавляем класс error
    } else if (count <= 15) {                   // Если осталось меньше 15 символов
      bioCount.className = 'warn';              // Добавляем класс warn
    } else {                                    // В остальных случаях
      bioCount.className = 'good';              // Добавляем класс good
    }
    var charMsg = '<b>' + count + '</b>' + ' символов'; // Выводимое сообщение
    bioCount.innerHTML = charMsg;               // Обновляем элемент счетчика
  }

}());
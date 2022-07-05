(function() {                             // Находится внутри IIFE
  var $imgs = $('#gallery img');          // Получаем изображения
  var $search = $('#filter-search');      // Получаем поле ввода
  var cache = [];                         // Создаем массив cache

  $imgs.each(function() {                 // Для каждого изображения
    cache.push({                          // Добавляем объект в массив cache
      element: this,                      // Это изображение
      text: this.alt.trim().toLowerCase() // Текст атрибута alt (обработанный, строчными)
    });
  });

  function filter() {                     // Объявляем функцию filter()
    var query = this.value.trim().toLowerCase();  // Получаем запрос
    cache.forEach(function(img) {         // Для каждого элемента cache передает изображение
      var index = 0;                      // Присваиваем index значение 0

      if (query) {                        // Если запрос содержит текст
        index = img.text.indexOf(query);  // Проверяем, есть ли он здесь
      }

      img.element.style.display = index === -1 ? 'none' : '';  // Показываем / скрываем
    });
  }

  if ('oninput' in $search[0]) {          // Если браузер поддерживает событие input
    $search.on('input', filter);          // Используем его для вызова filter()
  } else {                                // Иначе
    $search.on('keyup', filter);          // Вызываем filter() с помощью события keyup
  }              

}());
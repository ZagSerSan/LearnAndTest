(function() {

  var $imgs = $('#gallery img');                  // Сохраняем все изображения
  var $buttons = $('#buttons');                   // Сохраняем элементы button
  var tagged = {};                                // Создаем объект tagged

  $imgs.each(function() {                         // Перебираем изображения и
    var img = this;                               // сохраняем их в переменную
    var tags = $(this).data('tags');              // Получаем теги этого элемента

    if (tags) {                                   // Если элемент содержит теги
      tags.split(',').forEach(function(tagName) { // Разбиваем их по запятой
        if (tagged[tagName] == null) {            // Если нет, то
          tagged[tagName] = [];                   // Добавляем в объект пустой массив
        }
        tagged[tagName].push(img);                // Добавляем изображение в массив
      });
    }
  });

  $('<button/>', {                                 // Создаем пустую кнопку
    text: 'Все',                              // Добавляем текст 'Все'
    class: 'active',                               // Делаем ее активной
    click: function() {                            // Добавляем обработчик onclick
      $(this)                                      // Получаем нажатую кнопку
        .addClass('active')                        // Добавляем класс active
        .siblings()                                // Получаем остальные кнопки
        .removeClass('active');                    // Удаляем из них класс active
      $imgs.show();                                // Выводим все изображения
    }
  }).appendTo($buttons);                           // Добавляем к другим кнопкам

  $.each(tagged, function(tagName) {               // Для каждого тега
    $('<button/>', {                               // Создаем пустую кнопку
      text: tagName + ' (' + tagged[tagName].length + ')', // Добавляем имя тега
      click: function() {                          // Добавляем обработчик щелчка
        $(this)                                    // Нажатая кнопка
          .addClass('active')                      // Делаем нажатый элемент активным
          .siblings()                              // Получаем остальные кнопки
          .removeClass('active');                  // Удаляем из них класс active
        $imgs                                      // Все изображения
          .hide()                                  // Прячем их
          .filter(tagged[tagName])                 // Находим те, что имеют данный тег
          .show();                                 // Показываем только их
      }
    }).appendTo($buttons);                         // Добавляем к другим кнопкам
  });

}());
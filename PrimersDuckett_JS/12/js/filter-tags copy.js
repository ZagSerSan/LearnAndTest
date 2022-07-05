(function(){

  var $imgs = $('#gallery img');                  // Сохраняем все изображения
  var $buttons = $('#buttons');                   // Сохраняем элементы button
  var tagged = {};                                // Создаем объект tagged

  $imgs.each(function(){                          // Перебираем изображения и
    var img = this,                               // сохраняем их в переменную
        tags = $(this).data('tags');              // Получаем теги этого элемента

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
    click: function(e) {                           // Добавляем обработчик onclick
      $buttons.children().removeClass('active');   // Clear active button
      $(this).addClass('active');                  // Делаем нажатый элемент активным
      $imgs.show();                                // Выводим все изображения
    }
  }).appendTo($buttons);                           // Добавляем к другим кнопкам

  Object.keys(tagged).forEach(function(tagName){   // Для каждого тега
    $('<button/>', {                               // Создаем пустую кнопку
      text: tagName + ' ('+tagged[tagName].length+')', // Добавляем имя тега в качестве текста
      click: function(e) {                         // Добавляем обработчик щелчка
        $buttons.children().removeClass('active'); // Сбрасываем активную кнопку
        $(this).addClass('active');                // Делаем нажатый элемент активным
        $imgs.hide();                              // Скрываем все изображения
        $(tagged[tagName]).show();                 // Отображаем изображения с этим тегом
      }  
    }).appendTo($buttons);                         // Добавляем к другим кнопкам
  });

}());
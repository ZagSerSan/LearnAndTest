var compare = {                           // Объявляем объект compare
  name: function(a, b) {                  // Добавляем метод name
    a = a.replace(/^the /i, '');          // Удаляем в начале параметра "The"
    b = b.replace(/^the /i, '');          // Удаляем в начале параметра "The"

    if (a < b) {                          // Если значение a меньше значения b
      return -1;                          // Возвращаем -1
    } else {                              // Иначе
      return a > b ? 1 : 0;               // Если a больше b, возвращаем 1, ИЛИ
    }                                     // Если они равны, возвращаем 0
  },
  duration: function(a, b) {              // Добавляем метод duration
    a = a.split(':');                     // Разделяем время по двоеточию
    b = b.split(':');                     // Разделяем время по двоеточию

    a = Number(a[0]) * 60 + Number(a[1]); // Преобразовываем время в секунды
    b = Number(b[0]) * 60 + Number(b[1]); // Преобразовываем время в секунды

    return a - b;                         // Возвращаем a минус b
  },
  date: function(a, b) {                  // Добавляем метод date
    a = new Date(a);                      // Новый объект Date для хранения даты
    b = new Date(b);                      // Новый объект Date для хранения даты

    return a - b;                         // Возвращаем a минус b
  }
};

$('.sortable').each(function() {
  var $table = $(this);                     // Это сортируемая таблица
  var $tbody = $table.find('tbody');        // Сохраняем тело таблицы
  var $controls = $table.find('th');        // Сохраняем заголовки таблицы
  var rows = $tbody.find('tr').toArray();   // Сохраняем массив со строками

  $controls.on('click', function() {        // Когда пользователь щелкает по заголовку
    var $header = $(this);                  // Получаем заголовок
    var order = $header.data('sort');       // Получаем значением атрибута data-sort
    var column;                             // Объявляем переменную column

    // Если выбранный элемент имеет класс ascending или descending,
	// меняем атрибут class на противоположный
    if ($header.is('.ascending') || $header.is('.descending')) {  
      $header.toggleClass('ascending descending');    // Меняем на противоположный класс
      $tbody.append(rows.reverse());                // Переворачиваем массив
    } else {                                        // Иначе: выполняем сортировку 
      $header.addClass('ascending');                // Добавляем класс в заголовок
      // Удаляем asc или desc из всех остальных заголовков
      $header.siblings().removeClass('ascending descending'); 
      if (compare.hasOwnProperty(order)) {  // Если объект compare содержит метод
        column = $controls.index(this);         // Ищем порядковый номер столбца

        rows.sort(function(a, b) {               // Вызываем sort() из массива rows
          a = $(a).find('td').eq(column).text(); // Получаем текст столбца в строке a
          b = $(b).find('td').eq(column).text(); // Получаем текст столбца в строке b
          return compare[order](a, b);           // Вызываем метод compare
        });

        $tbody.append(rows);
      }
    }
  });
});
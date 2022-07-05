(function() {

  // СОХРАНЯЕМ КАЖДОГО ФРИЛАНСЕРА КАК ОБЪЕКТ В МАССИВЕ
  var people = [
    {                                              // Каждый фрилансер как объект
      name: 'Клара',                               // Сохраняем имя и гонорар
      rate: 60
    },
    {
      name: 'Камила',
      rate: 80
    },
    {
      name: 'Григорий',
      rate: 75
    },
    {
      name: 'Лаврентий',
      rate: 120
    }
  ];

  var rows = [],                        // Массив rows
      $min = $('#value-min'),           // Минимальное введенное значение
      $max = $('#value-max'),           // Максимальное введенное значение
      $table = $('#rates');             // Таблица с результатами

  function makeRows() {                 // Создаем строки таблицы и массив
    people.forEach(function(person) {   // Для каждого объекта person в массиве people
      var $row = $('<tr></tr>');        // Создаем строку
      $row.append( $('<td></td>').text(person.name) ); // Добавляем имя
      $row.append( $('<td></td>').text(person.rate) ); // Добавляем гонорар
      rows.push({ // Создаем массив rows, связывающий объекты people со строками таблицы
        person: person,                 // Ссылка на объект person
        $element: $row                  // Ссылка на строку в виде выборки jQuery
      });
    });
  }

  function appendRows() {               // Добавляет строки в таблицу
    var $tbody = $('<tbody></tbody>');  // Создаем элемент tbody
    rows.forEach(function(row) {        // Для каждого объекта в массиве rows
      $tbody.append(row.$element);      // Добавляем HTML-код строки
    });
    $table.append($tbody);              // Добавляем строки в таблицу
  }

  function update(min, max) {           // Обновляет содержимое таблицы
    rows.forEach(function(row) {        // Для каждой строки в массиве rows
      if (row.person.rate >= min && row.person.rate <= max) { // Если в диапазоне
        row.$element.show();            // Показываем строку
      } else {                          // Иначе
        row.$element.hide();            // Прячем строку
      }
    });
  }

  function init() {                     // Действия при первом запуске сценария
    $('#slider').noUiSlider({           // Подготавливаем ползунок
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                           // Создаем строки таблицы и массив rows
    appendRows();                         // Добавляем строки в таблицу
    update($min.val(), $max.val());     // Обновляем таблицу, чтобы показать совпадения
  }

  $(init);                              // Когда дерево DOM готово, вызываем init()
}());
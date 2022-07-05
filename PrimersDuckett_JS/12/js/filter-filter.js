$(function() {

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


  // ФУНКЦИЯ ИГРАЕТ РОЛЬ ФИЛЬТРА
  function priceRange(person) {                        // Объявляем priceRange()
    return (person.rate >= 65) && (person.rate <= 90); // В диапазоне, если возвращает true
  };

  // ФИЛЬТРУЕМ МАССИВ PEOPLE И ДОБАВЛЯЕМ СОВПАДЕНИЯ В МАССИВ RESULTS
  var results = [];                              // Массив для подходящих фрилансеров
  results = people.filter(priceRange);           // filter() вызывает priceRange()


  // ПЕРЕБИРАЕМ НОВЫЙ МАССИВ И ДОБАВЛЯЕМ ПОДХОДЯЩИХ ФРИЛАНСЕРОВ В ИТОГОВУЮ ТАБЛИЦУ
  var $tableBody = $('<tbody></tbody>');           // Новое содержимое jQuery
  for (var i = 0; i < results.length; i++) {       // Перебираем подходящие элементы
    var person = results[i];                       // Сохраняем текущего фрилансера
    var $row = $('<tr></tr>');                     // Создаем для него строку
    $row.append($('<td></td>').text(person.name)); // Добавляем его имя
    $row.append($('<td></td>').text(person.rate)); // Добавляем его зарплату
    $tableBody.append( $row );                     // Добавляем строку в новое содержимое
  }

  // Добавляем новое содержимое в тело таблицы
  $('thead').after($tableBody);                    // Добавляем tbody после thead
});
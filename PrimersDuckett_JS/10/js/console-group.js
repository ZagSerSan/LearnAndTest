var $form = $('#calculator');

$form.on('submit', function(e) {                 // Вызывается при нажатии кнопки
  e.preventDefault();
  console.log('Нажали кнопку...');              // Сообщаем о нажатии кнопки

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  console.group('Вычисление площади');            // Начало группы
    console.info('Ширина ', width);               // Выводим ширину
    console.info('Высота ', height);             // Выводим высоту
    console.log(area);                           // Выводим площадь
  console.groupEnd();                            // Конец группы

  $form.append('<p>' + area + '</p>');
});
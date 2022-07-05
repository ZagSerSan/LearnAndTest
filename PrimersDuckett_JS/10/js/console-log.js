console.log('Мы начинаем...');               // Сценарий запущен
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() { // Когда поле теряет фокус
  console.log('Вы ввели ', this.value );          // Записываем значение в консоль
});

$('#calculator').on('submit', function(e) {     // При нажатии кнопки
  e.preventDefault();                           // Предотвращаем отправку формы
  console.log('Нажали кнопку...');             // Сообщаем о нажатии кнопки

  width = $('#width').val();
  console.log('Ширина ' + width);                // Записываем ширину в консоль

  height = $('#height').val();
  console.log('Высота ', height);               // Записываем высоту в консоль

  area = width * height;
  console.log(area);                            // Записываем площадь в консоль

  $form.append('<p>' + area + '</p>')
});
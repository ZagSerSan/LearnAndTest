console.info('Мы начинаем...');                    // Уведомление: сценарий работает

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // В ответ на событие blur
  console.warn('Вы ввели ', this.value);           // Предупреждение: введенное значение
});

$('#calculator').on('submit', function(e) {           // При отправке формы
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);                                // Ошибка: выводим площадь

  $form.append('<p class="result">' + area + '</p>');
});
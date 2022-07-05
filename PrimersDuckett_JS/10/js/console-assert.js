var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // Сообщение выводится, только если введенное значение меньше 10
  console.assert(this.value > 10, 'Пользователь ввел число меньше 10');
});

$('#calculator').on('submit', function(e) { 
  e.preventDefault();
  console.log('Нажали кнопку...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // Сообщение выводится, только если пользователь ввел не число
  console.assert($.isNumeric(area), 'Пользователь ввел не числовое значение');

  $form.append('<p>' + area + '</p>');
});
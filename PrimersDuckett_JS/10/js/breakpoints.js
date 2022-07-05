var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Нажали кнопку...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;             // Если открыты инструменты для разработчика, устанавливается контрольная точка
  }

  $form.append('<p>' + area + '</p>');
});
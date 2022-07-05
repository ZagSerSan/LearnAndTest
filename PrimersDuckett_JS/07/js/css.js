$(function() {

  // Получаем фоновый цвет первого элемента списка.
  var backgroundColor = $('li').css('background-color');

  // Записываем, какой фоновый цвет должен использоваться после списка.
  $('ul').append('<p>Предыдущий цвет: ' + backgroundColor + '</p>');

  // Изменяем некоторые свойства всех элементов списка.
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});
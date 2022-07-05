$(function() {
  $('ul').before('<p class="notice">Список обновлен!</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li>кукуруза <em>без ГМО</em></li>');
  $('li:last').after($newListItem);
});
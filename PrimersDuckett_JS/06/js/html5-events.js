function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
  // Пример обновлен для обеспечения кросс-браузерной совместимости (по рекомендации MDN)
  var message = 'Вы ввели данные, которые не будут сохранены';
  (event || window.event).returnValue = message;
  return message;
});
// Этот пример может быть обновлен для использования Modernizr - пожалуйста, указывайте localstorage строчными буквами
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Получаем элементы формы
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Заполняем элементы
  txtAnswer.value = localStorage.getItem('answer');      // данными из localStorage

  txtUsername.addEventListener('input', function () {    // Сохраняем данные при нажатии клавиши
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Сохраняем данные при нажатии клавиши
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}
// Этот пример может быть обновлен для использования Modernizr - пожалуйста, указывайте sessionstorage строчными буквами 
if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),  // Получаем элементы формы
      txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionStorage.getItem('username'); // Заполняем элементы
  txtAnswer.value = sessionStorage.getItem('answer');     // данными из sessionStorage

  txtUsername.addEventListener('input', function () {     // Сохраняем данные при нажатии клавиши
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {       // Сохраняем данные при нажатии клавиши
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}
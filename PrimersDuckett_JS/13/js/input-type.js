(function() {

  var pwd = document.getElementById('pwd');     // Получаем поле ввода пароля
  var chk = document.getElementById('showPwd'); // Получаем флажок

  addEvent(chk, 'change', function(e) {         // При щелчке по флажку
    var target = e.target || e.srcElement;      // Получаем его
    try {                                       // Пытаемся выполнить следующий блок
      if (target.checked) {                     // Если флажок установлен
        pwd.type = 'text';                      // Присваиваем type значение text
      } else {                                  // Если нет
        pwd.type = 'password';                  // Присваиваем type значение password
      }
    } catch(error) {                            // Если возникла ошибка
      alert('Этот браузер не умеет переключать типы'); // Сообщаем о невозможности изменения типа
    }
  });

}());
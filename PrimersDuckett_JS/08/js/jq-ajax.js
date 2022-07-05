// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме: 
// В браузерах Chrome / IE / Safari проблема заключается в кросс-браузерных ограничениях.
// В браузере Firefox контент может быть загружен, но не стилизован.
// Вы можете запустить данный сценарий на собственном сервере.

$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL-адрес для загрузки
  var $content = $('#content');                             // Кэшируем выборку

  $('nav a.current').removeClass('current');                // Обновляем ссылки
  $(this).addClass('current');
  $('#container').remove();                                 // Удаляем контент

  $.ajax({
    type: "POST",                                           // GET или POST
    url: url,                                               // Путь к файлу
    timeout: 2000,                                          // Время ожидания
    beforeSend: function() {                                // Перед Ajax-запросом 
      $content.append('<div id="load">Загрузка</div>');      // Сообщение о загрузке
    },
    complete: function() {                                  // После завершения запроса
      $('#load').remove();                               // Убираем сообщение
    },
    success: function(data) {                               // Выводим контент
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                      // Выводим сообщение об ошибке  
      $('#panel').html('<div class="loading">Please try again soon.</div>');
    }
  });

});
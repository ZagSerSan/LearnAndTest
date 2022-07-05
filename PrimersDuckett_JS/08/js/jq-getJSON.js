// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме в Chrome / IE из-за кросс-доменных ограничений.
// Вы можете запустить данный сценарий на собственном сервере. 

$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // СЕРВЕР ВОЗВРАЩАЕТ ДАННЫЕ
    var d = new Date();                                  // Создаем объект для данных
    var hrs = d.getHours();                              // Получаем часы
    var mins = d.getMinutes();                           // Получаем минуты
    var msg = '<h2>Стартовый пакет гика</h2>';                 // Начальное сообщение
    $.each(data, function(key, val) {                    // Добавляем каждый курс
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Последнее обновление: ' + hrs + ':' + mins + '<br>'; // Показываем время обновления
    $('#rates').html(msg);                               // Добавляем цены на страницу
  }).fail( function() {                                  // ПРОИЗОШЛА ОШИБКА
    $('#rates').text('Извините, не удалось загрузить актуальные цены.');   // Показываем сообщение об ошибке 
  }).always( function() {                                // ВЫПОЛНЯЕТСЯ ВСЕГДА
     var reload = '<a id="refresh" href="#">';           // Добавляем ссылку для обновления
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // Добавляем ссылку для обновления
     $('#refresh').on('click', function(e) {             // Добавляем обработчик щелчка
       e.preventDefault();                               // Останавливаем переход
       loadRates();                                      // Вызываем loadRates()
     });
  }); 
}

loadRates();                                             // Вызываем loadRates()

// Если вы работаете в автономном режиме в браузере Firefox, вы можете получить ошибку оформления JSON.
// Это происходит из-за того, что Firefox не считывает корректный тип MIME (ошибку можно проигнорировать).
// После выгрузки примера на сервер, вам может понадобиться установить корректный тип MIME (application/JSON).
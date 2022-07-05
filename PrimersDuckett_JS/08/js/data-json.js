// ПРИМЕЧАНИЕ: Если вы запустите сценарий в автономном режиме,
// Вы не получите статус сервера
// Закомментируйте строки 9 и 26, если вы работаете в автономном режиме

var xhr = new XMLHttpRequest();                 // Создаем объект XMLHttpRequest

xhr.onload = function() {                       // Если состояние сервера подходящее
  // Следующая условная проверка не работает в автономном режиме - только на сервере
  //if(xhr.status === 200) {                      // Если от сервера получен статус OK
    responseObject = JSON.parse(xhr.responseText);

    // ФОРМИРУЕМ СТРОКУ С НОВЫМ КОНТЕНТОМ (можно было бы также использовать работу с деревом DOM)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Перебираем объекты
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Обновляем страницу с новым контентом
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // Подготавливаем запрос
xhr.send(null);                                 // Отправляем запрос

// Если вы работаете в автономном режиме в браузере Firefox, вы можете получить ошибку оформления JSON.
// Это происходит из-за того, что Firefox не считывает корректный тип MIME (ошибку можно проигнорировать).

// После выгрузки примера на сервер, вам может понадобиться установить корректный тип MIME (application/JSON).
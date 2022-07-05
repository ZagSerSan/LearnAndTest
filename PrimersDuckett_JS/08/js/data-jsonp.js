function showEvents(data) {                           // Обратный вызов при загрузке JSON
  var newContent = '';                                // Переменная для хранения HTML
 
    // ФОРМИРУЕМ СТРОКУ С НОВЫМ КОНТЕНТОМ (можно было бы также использовать работу с деревом DOM)
    for (var i = 0; i < data.events.length; i++) {    // Перебираем объекты
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Обновляем страницу с новым контентом
    document.getElementById('content').innerHTML = newContent;
}
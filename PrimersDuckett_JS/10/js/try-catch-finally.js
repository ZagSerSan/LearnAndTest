var feed = document.getElementById('feed');

// Правильный фид
var response = '{"deals": [{"title": "Краски на любой вкус","description": "Акварельные и гуашевые краски со скидкой","price": 30,"link": "http://www.example.com/deals-paints/"},{"title": "Немецкие интерьерные краски","description": "Лучшее сезонное предложение","price": 28,"link": "http://www.example.com/de-paints/"},{"title": "Дизайнерская мечта","description": "Недорогая консультация у известного дизайнера Марьи Козявкиной","price": 42,"link": "http://www.example.com/marja-kozyavkina/"}]}';
// Фид с ошибками, закомментируйте следующую строку, чтобы посмотреть, как это работает
response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l '; // Данные JSON

if (response) {
  try {
    var dealData = JSON.parse(response);              // Пытаемся разобрать JSON
    showContent(dealData);                            // Выводим JSON
  } catch(e) {
    var errorMessage = e.name + ' ' + e.message;      // Создаем сообщение об ошибке
    console.log(errorMessage);                        // Выводим отладочное сообщение
    feed.innerHTML = '<em>Извините, не удалось загрузить предложения</em>';// Показываем пользовательское сообщение
  } finally {
    var link = document.createElement('a');           // Добавляем ссылку для обновления
    link.innerHTML = ' <a href="try-catch-finally.html">reload</a>';
    feed.appendChild(link);
  }
}

function showContent(dealData) {
  var newContent = '';
  for (var i in dealData.deals) {
    newContent += '<div class="deal">';
    newContent += '<h2>' + dealData.deals[i].title + '</h2>';
    newContent += '<p>' + dealData.deals[i].description + '</p>';
    newContent += '<a href="' + dealData.deals[i].link + '">';
    newContent += ' ' + dealData.deals[i].link;
    newContent +='</a>';
    newContent += '</div>';
  }
  feed.innerHTML = newContent;
}
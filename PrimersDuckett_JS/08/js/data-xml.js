// ПРИМЕЧАНИЕ: Если вы запустите сценарий в автономном режиме,
// статус сервера не будет присвоен и пример выполнен не будет.
// Закомментируйте строки 9 и 35, если вы работаете в автономном режиме

var xhr = new XMLHttpRequest();        // Создаем объект XMLHttpRequest

xhr.onload = function() {              // Когда ответ загрузился
 // Следующая условная проверка не работает в автономном режиме - только на сервере
 // if (xhr.status === 200) {             // Если от сервера получен статус OK

  // ЭТА ЧАСТЬ ОТЛИЧАЕТСЯ, ПОСКОЛЬКУ ОНА ОБРАБАТЫВАЕТ XML, А НЕ HTML
  var response = xhr.responseXML;                      // Получаем XML с сервера
  var events = response.getElementsByTagName('event'); // Находим узлы event

  for (var i = 0; i < events.length; i++) {            // Перебираем их в цикле
    var container, image, location, city, newline;      // Объявляем переменные
    container = document.createElement('div');          // Создаем контейнер div
    container.className = 'event';                      // Добавляем атрибут class

    image = document.createElement('img');              // Добавляем изображения карты
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    container.appendChild(image);

    location = document.createElement('p');             // Добавляем данные о местоположении
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
// }

  function getNodeValue(obj, tag) {                   // Получаем содержимое из XML
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // ПОСЛЕДНЯЯ ЧАСТЬ ОСТАЕТСЯ ТАКОЙ ЖЕ, КАК И В ПРИМЕРЕ С HTML, НО ТЕПЕРЬ ЗАПРАШИВАЕТСЯ XML-ФАЙЛ
};

xhr.open('GET', 'data/data.xml', true);             // Подготавливаем запрос
xhr.send(null);                                     // Отправляем запрос
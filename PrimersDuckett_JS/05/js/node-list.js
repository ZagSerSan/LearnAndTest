var hotItems = document.querySelectorAll('li.hot'); // Сохраняем NodeList в массиве
if (hotItems.length > 0) {                          // Если в NodeList есть элементы

  for (var i = 0; i < hotItems.length; i++) {       // Обрабатываем их все при помощи цикла
    hotItems[i].className = 'cool';         // Изменяем значение атрибута class
  }

}
var el;                                                    // Объявляем переменные

function charCount(e) {                                    // Объявляем функцию
  var textEntered, charDisplay, counter, lastkey;          // Объявляем переменные
  textEntered = document.getElementById('message').value;  // Пользовательский текст
  charDisplay = document.getElementById('charactersLeft'); // Элемент счетчика
  counter = (180 - (textEntered.length));                  // Количество оставшихся символов
  charDisplay.textContent = counter;                       // Отображение оставшихся символов

  lastkey = document.getElementById('lastKey');            // Получение клавиши, нажатой последней 
  lastkey.textContent = 'ASCII-код последней нажатой клавиши: ' + e.keyCode; // Создаем сообщение
}
el = document.getElementById('message');                   // Получаем элемент, в котором находится сообщение
el.addEventListener('keypress', charCount, false);// Событие keypress 
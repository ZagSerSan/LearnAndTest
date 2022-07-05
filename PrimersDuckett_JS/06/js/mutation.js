var elList, addLink, newEl, newText, counter, listItems; // Объявляем переменные

elList  = document.getElementById('list');               // Получаем список
addLink = document.querySelector('a');                   // Получаем кнопку добавления элемента
counter = document.getElementById('counter');            // Получаем счетчик элементов

function addItem(e) {                                    // Объявляем функцию
  e.preventDefault();                                    // Подавляем стандартное поведение ссылки 
  newEl = document.createElement('li');                  // Новый элемент li
  newText = document.createTextNode('New list item');    // Новый текстовый узел
  newEl.appendChild(newText);                            // Добавляем текст в li
  elList.appendChild(newEl);                             // Добавляем li в список
}

function updateCount() {                                 // Объявляем функцию
  listitems = list.getElementsByTagName('li').length;    // Получаем общее количество элементов li
  counter.innerHTML = listitems;                         // Обновляем счетчик
}

addLink.addEventListener('click', addItem, false);       // Щелчок по кнопке
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM обновляется
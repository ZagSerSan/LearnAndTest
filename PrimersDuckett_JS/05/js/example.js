// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ К НАЧАЛУ И К КОНЦУ СПИСКА
var list = document.getElementsByTagName('ul')[0];                 // Получаем элемент ul

// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К КОНЦУ СПИСКА
var newItemLast = document.createElement('li');                    // Создаем элемент
var newTextLast = document.createTextNode('деревенская сметана');                // Создаем текстовый узел
newItemLast.appendChild(newTextLast);                              // Добавляем текстовый узел к элементу
list.appendChild(newItemLast);                                     // Добавляем элемент к концу списка

// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К НАЧАЛУ СПИСКА
var newItemFirst = document.createElement('li');                   // Создаем элемент
var newTextFirst = document.createTextNode('белокочанная капуста');                // Создаем текстовый узел
newItemFirst.appendChild(newTextFirst);                            // Добавляем текстовый узел к элементу
list.insertBefore(newItemFirst, list.firstChild);                  // Добавляем элемент к концу списка



var listItems = document.querySelectorAll('li');                   // Все элементы li

// ДОБАВЛЯЕМ КЛАСС COOL КО ВСЕМ ЭЛЕМЕНТАМ СПИСКА
var i;                                                             // Переменная счетчика
for (i = 0; i < listItems.length; i++) {                           // Перебираем элементы в цикле
  listItems[i].className = 'cool';                                 // Изменяем класс на cool
}

// ДОБАВЛЯЕМ В ЗАГОЛОВОК ИНФОРМАЦИЮ О КОЛИЧЕСТВЕ ЭЛЕМЕНТОВ В СПИСКЕ
var heading = document.querySelector('h2');                        // Элемент h2
var headingText = heading.firstChild.nodeValue;                    // Текст элемента h2
var totalItems = listItems.length;                                 // Количество элементов li
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Контент
heading.innerHTML = newHeading;                                    // Обновляем h2, применяя innerHTML (не textContent), так как в контенте присутствует разметка
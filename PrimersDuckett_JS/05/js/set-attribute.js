var firstItem = document.getElementById('one'); // Получаем первый элемент
firstItem.className = 'complete';               // Изменяем его атрибут class 

var fourthItem = document.getElementsByTagName('li').item(3);// Получаем четвертый элемент
fourthItem.setAttribute('class', 'cool');       // Добавляем к нему атрибут
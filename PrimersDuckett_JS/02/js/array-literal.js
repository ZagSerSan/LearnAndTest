﻿// Создаем массив и присваиваем значения.
var colors; 
colors = ['белый', 'черный', 'пользовательский'];

// Отображаем первый элемент массива.
var el = document.getElementById('colors');
el.textContent = colors[0];

/* 
NOTE: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:

el.textContent = colors[0];
*/
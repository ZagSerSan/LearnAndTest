// МЕТОД 1
var price = 5;
var quantity = 14;
var total = price * quantity;

/* МЕТОД 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* МЕТОД 3
var price = 5, quantity = 14;
var total = price * quantity;
*/

// Записываем результат в элемент с идентификатором cost
var el = document.getElementById('cost');  // Получаем элемент с идентификатором cost
el.textContent = total + ' ₽';              // Заменяем содержимое этого элемента

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:
el.innerHTML = '$' + total;
*/
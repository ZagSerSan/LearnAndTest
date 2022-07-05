// Создаем три переменные для хранения нужных данных.
var price;
var quantity;
var total;

// Присваиваем значения переменным price и quantity.
price = 5;
quantity = 14;
// Вычисляем стоимость, перемножая значения переменных price и quantity.
total = price * quantity;

// Берем элемент с идентификатором cost.
var el = document.getElementById('cost');
el.textContent = total + ' ₽';

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:
el.innerHTML = '$' + total;
*/
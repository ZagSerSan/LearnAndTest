// Создаем переменную subtotal для подсчета стоимости таблички и выполняем вычисление
var subtotal = (13 + 1) * 5; // Переменная subtotal равна 70

// Создаем переменную shipping для подсчета стоимости доставки и выполняем вычисление
var shipping = 0.5 * (13 + 1); // Переменная shipping равна 7

// Создаем переменную total со значением, равным сумме значений переменных subtotal и shipping
var total = subtotal + shipping; // Переменная total равна 77

// Выводим результат на экран
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 12, 15 и 18, но возникает угроза безопасности сайта, как описано в книге:

elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/
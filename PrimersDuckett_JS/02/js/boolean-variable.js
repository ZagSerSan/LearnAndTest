// Создаем переменные и присваиваем им значения
var inStock;
var shipping;
inStock = true;
shipping = false;

// Получаем элемент с идентификатором stock
var elStock = document.getElementById('stock');
// Присваиваем классу имя - значение переменной inStock
elStock.className = inStock;

// Получаем элемент с идентификатором shipping
var elShip = document.getElementById('shipping');
// Присваиваем классу имя - значение переменной shipping
elShip.className = shipping;
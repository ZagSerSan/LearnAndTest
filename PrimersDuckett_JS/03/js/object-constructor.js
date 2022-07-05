// Создаем объект
var hotel = new Object();

hotel.name = 'Пляж';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
};

var elName = document.getElementById('hotelName'); // Получаем элемент
elName.textContent = hotel.name;                   // Обновляем HTML со свойством объекта

var elRooms = document.getElementById('rooms');    // Получаем элемент
elRooms.textContent = hotel.checkAvailability();   // Обновляем HTML с результатом метода

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 12 и 15, но возникает угроза безопасности сайта, как описано в книге
*/
// Создаем объект
var hotel = {
  name : 'Тула',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; // Указываем слово "this", так как внутри функции
	}
};

// Обновляем HTML
var elName = document.getElementById('hotelName'); // Получаем элемент
elName.textContent = hotel.name;                   // Обновляем HTML со свойством объекта

var elRooms = document.getElementById('rooms');    // Получаем элемент
elRooms.textContent = hotel.checkAvailability();   // Обновляем HTML со свойством объекта

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 13 и 16, но возникает угроза безопасности сайта, как описано в книге
*/
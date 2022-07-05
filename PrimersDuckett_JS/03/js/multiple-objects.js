// Создаем шаблон для объектов отелей
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Создаем два объекта отелей
var quayHotel = new Hotel('Тула', 40, 25);
var parkHotel = new Hotel('Пляж', 120, 77);


// Обновляем HTML-контент страницы
var details1 = quayHotel.name + ', свободно номеров: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ', свободно номеров: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 21 и 26, но возникает угроза безопасности сайта, как описано в книге
*/
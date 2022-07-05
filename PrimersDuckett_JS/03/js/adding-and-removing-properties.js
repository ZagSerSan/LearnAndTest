// Создаем объект
var hotel = {
  name : 'Пляж',
  rooms : 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Обновляем HTML
var elName = document.getElementById('hotelName'); // Получаем элемент
elName.textContent = hotel.name;                   // Обновляем HTML со свойством объекта

var elPool = document.getElementById('pool');      // Получаем элемент
elPool.className = hotel.pool;                     // Обновляем HTML со свойством объекта

var elGym = document.getElementById('gym');        // Получаем элемент
elGym.className = hotel.gym;                       // Обновляем HTML со свойством объекта

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строке 14, но возникает угроза безопасности сайта, как описано в книге
*/
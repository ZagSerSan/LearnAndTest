function init() {
  var mapOptions = {                                 // Настраиваем параметры карты
    center: new google.maps.LatLng(39.907975, 32.858992),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;                                      // Map() рисует карту
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Создаем элемент script
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Добавляем элемент на страницу
}

window.onload = loadScript;                          // после загрузки вызываем loadScript()
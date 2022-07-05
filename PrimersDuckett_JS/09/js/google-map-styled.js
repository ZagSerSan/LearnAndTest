var venueMap;
function init() {

  var pinLocation = new google.maps.LatLng(39.907975, 32.858992);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [ // Свойство styles является массивом объектов
      {
        stylers: [ // Свойство stylers хранит массив объектов
          { hue: "#00ff6f" }, // Общие цвета карты
          { saturation: -50 } // Общая насыщенность цветов 
        ]
      }, {
        featureType: "road", // Свойства дорог
        elementType: "geometry", // Их геометрия (линии)
        stylers: [
          { lightness: 100 }, // Освещенность дорог
          { visibility: "simplified" } // Уровень детализации 
        ]
      }, {
        featureType: "transit", // Свойства общественного транспорта
        elementType: "geometry", // Его геометрия (линии)
        stylers: [
          { hue: "#ff6600" }, // Цвет общественного транспорта
          { saturation: +80 } // Насыщенность цветов общественного транспорта
        ]
      }, {
        featureType: "transit", // Свойства общественного транспорта
        elementType: "labels", // Его текстовые метки
        stylers: [
          { hue: "#ff0066" }, // Цвет меток
          { saturation: +80 } // Насыщенность цветов меток
        ]
      }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var startPosition = new google.maps.Marker({    // Создаем новый маркер
    position: pinLocation,                        // Устанавливаем его позицию
    map: venueMap,                                // Определяем карту
    icon: "img/go.png"                            // Путь к изображению, HTML-код
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;
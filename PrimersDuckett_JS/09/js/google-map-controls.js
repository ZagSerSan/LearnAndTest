function init() {
  // объект mapOptions содержит данные для инициилизации карты
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(39.907975, 32.858992),
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
    overviewMapControl: false
  };
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;
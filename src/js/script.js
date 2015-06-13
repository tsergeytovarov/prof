function initialize() {
  var mapOptions = {
    zoom: 11,
    scrollwheel: false,
    draggable: false,
    center: new google.maps.LatLng(55.856152, 49.073131)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = 'img/map-point.png';
  var myLatLng = new google.maps.LatLng(55.817786, 49.259556);
  var mapMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

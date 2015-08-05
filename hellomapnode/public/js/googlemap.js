var myLatlng = new google.maps.LatLng(52.773492,-34.269782); // middle of the North Atlantic Ocean
var mapOptions = {
    zoom: 4,
    center: myLatlng,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    }
}

var globaltimecounter=0;

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addListenerOnce(map, 'tilesloaded', mapLoaded);

function initialize() {
  
  // Create the DIV to hold the control and
  // call the CenterControl() constructor passing
  // in this DIV.
  var locationControlDiv = document.createElement('div');
  var locationControl = new LocationControl(locationControlDiv);

  // centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(locationControlDiv);
  
  var switchmapsDiv = document.createElement('div');
  var switchmapsControl = new SwitchMapsControl(switchmapsDiv)
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(switchmapsDiv);
}


// get the new location data through for the interval timer
function getNewLocation() {
  getLocationGmaps();
  globaltimecounter++;
}

function getLocationGmaps()
{
    if(globaltimecounter == 0)
        setInterval(getNewLocation, 10 * 1000);
    $.ajax({
		url: '/getlocation'
	}).done(function (data) {
        var jsonlocation = JSON.parse(data);
        var myLatlng = new google.maps.LatLng(parseInt(jsonlocation.latitude),parseInt(jsonlocation.longitude));
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Location Point'
        });
    });
}

function mapLoaded()
{
    getLocationGmaps();
}
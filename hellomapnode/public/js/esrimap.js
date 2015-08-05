var esrimap;
var globaltimecounter=0;

  require([
    "esri/map", "esri/geometry/Point", 
    "esri/symbols/SimpleMarkerSymbol", "esri/graphic",
    "dojo/domReady!", "esri/layers/GraphicsLayer"
  ], function(
    Map, Point,
    SimpleMarkerSymbol, Graphic,
    domStyle
  ) 
    {
        esrimap = new Map("map",{
          basemap: "oceans",
          center: [ -34.269782, 52.773492 ],
          zoom: 4,
          minZoom: 2
        });
        esrimap.on("load", mapLoaded);
    });

// get the new location data through for the interval timer
function getNewLocation() {
  getLocationESRI();
  globaltimecounter++;
}


function getLocationESRI()
    {
    //if first click start off the timer to get location regularly
    if(globaltimecounter == 0)
        setInterval(getNewLocation, 10 * 1000);
    $.ajax({
		url: '/getlocation'
	}).done(function (data) {
        var jsonlocation = JSON.parse(data);
        var point = new esri.geometry.Point(parseFloat(jsonlocation.longitude), parseFloat(jsonlocation.latitude));
        var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
        markerSymbol.setColor(new dojo.Color("#ce641d"));
        markerSymbol.setOutline(null);
        var graphic = new esri.Graphic(point, markerSymbol);
        esrimap.graphics.add(graphic);
        esrimap.centerAndZoom(point, 5);
        });
    }

function switchMap()
{
    window.location.href = '/googlemap'
}

function mapLoaded()
{
    getLocationESRI();
}



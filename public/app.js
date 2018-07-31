const app = function(){

  let coords = [55.8654, -4.2579]
  let zoom = 16
  let container = "main-map"
const mainMap = new MapWrapper(container, coords, zoom);
  mainMap.addMarker(coords);

  let CodeClanCoords = [55.865386, -4.257859]
  let HomeCoords = [55.847817, -4.253144]
  let GreeceCoords = [35.513830, 24.018037]

mainMap.moveMap(CodeClanCoords, "cc");
mainMap.moveMap(HomeCoords,"hc" );
mainMap.moveMap(GreeceCoords, "gc");
};

window.addEventListener("DOMContentLoaded", app)

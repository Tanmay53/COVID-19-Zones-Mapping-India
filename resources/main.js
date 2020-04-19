var mainMap = createMapAt("map");

var stateMap = createMapAt("stateMap", 6);

var stateSelector = document.getElementById("states");
var stateOptions = "<option vlaue='none'>Select a State</option>";

var keys = Object.keys(districtNames).sort();

for(var index = 0; index < keys.length; index++) {
  stateOptions += "<option value='" + keys[index] + "'> " + keys[index] + "</option>";
}

stateSelector.innerHTML = stateOptions;

var districtSelector = document.getElementById("districts");

var stateMapElement = document.getElementById("mapBoard");

stateSelector.addEventListener("change", function() {
  if(selectionCheck(this, districtSelector)) {
    stateMapElement.style.display = "none";
    var districtArray = districtNames[stateSelector.value].sort();
    var districtOptions = "<option value='none'> Select a District </option>";

    for(var index = 0; index < districtArray.length; index++) {
      districtOptions += "<option value='" + districtArray[index] + "'> " + districtArray[index] + " </option>"; 
    }

    districtSelector.innerHTML = districtOptions;
    districtSelector.style.display = "inline";
  }
});

var previousLayer = {
  data: undefined,
  style: undefined
};

function getLayerStyle(layer) {
  var styleData = layer.options;
  return {
    fillColor: styleData.fillColor,
    fillOpacity: styleData.fillOpacity,
    color: styleData.color,
    weight: styleData.weight
  };
}

districtSelector.addEventListener("change", function() {
  if(selectionCheck(this, stateMapElement)) {
    stateMapElement.style.display = "block";

    var coordinates = stateCoordinates[stateSelector.value];  // moving focus to the state.
    //stateMap[0].setZoom(coordinates.zoom);
    stateMap[0].flyTo(new L.latLng(coordinates.lat, coordinates.long), coordinates.zoom); 
    
    // There are two districts named as Balrampur one in UP and one in chattisgarh.
    // So to prevent from selecting wrong district a space is added to Balrampur of Chattisgarh in india-districts-770.geojson.
    // same case for Pratapgarh and Hamirpur.

    if(previousLayer.data != undefined) {
      previousLayer.data.setStyle(previousLayer.style);
    }

    previousLayer.data = stateMap[1][districtSelector.value];
    previousLayer.style = getLayerStyle(previousLayer.data);
    
    stateMap[1][districtSelector.value].setStyle(highlightedStyle);
  }
});

var highlightedStyle = {
  fillColor: "#ffff00",
  fillOpacity: 0.8,
  color: "#ffff00",
  weight: 0.5
};

function selectionCheck(currentElement, dependent) {
  if(currentElement.selectedIndex == 0) {
    dependent.style.display = "none";
    stateMapElement.style.display = "none";
    return false;
  }
  else {
    return true;
  }
}

document.getElementById("mapButton").addEventListener("click", function() {
  document.location = "#mapBox";
})
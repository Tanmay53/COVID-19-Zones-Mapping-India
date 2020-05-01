var districtNames = {};

var redZoneStates = Object.keys(redZones);
var orangeZoneStates = Object.keys(orangeZones);

function createMapAt(elementId, zoomLevel = 5, latitude = 23.5937, longitude = 80.9629) {
    var map = L.map(elementId, {
        dragging: false
        //maxBoundsViscosity: 1
    }).setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    var geoFile = new XMLHttpRequest();
    var JSONdata;

    var mappedDistricts = [];
    var districtLayers = {};

    geoFile.onreadystatechange = function() {
        if((this.readyState == 4) && (this.status == 200)) {
            JSONdata = JSON.parse(geoFile.responseText);
            L.geoJSON(JSONdata, {
                style: function(feature) {
                    return districtStyling(feature);
                },

                onEachFeature: featureFunctions
            }).addTo(map);
            if(elementId == "stateMap") {
                document.getElementById("mapBoard").style.display = "none";
            }
        }
    };

    geoFile.open("GET", "resources/dataFiles/india-districts-770.geojson", false);
    geoFile.send();

    if(Object.keys(districtNames).length == 0) { // keeping a one time changing list of all state-wise districts.
        districtNamesAssignment(JSONdata.features);
    }

    function districtStyling(feature) {
        var stateName = feature.properties["stname"];
        var districtName = feature.properties["dtname"];

        if(mappedDistricts.indexOf(districtName) == -1) {
            mappedDistricts.push(districtName);

            if((redZoneStates.indexOf(stateName) != -1) &&
            (redZones[stateName].indexOf(districtName) != -1)) {
                return redZoneStyle;
            }
            else if((orangeZoneStates.indexOf(stateName) != -1) &&
            (orangeZones[stateName].indexOf(districtName) != -1)) {
                return orangeZoneStyle;
            }
            else {
                return greenZoneStyle;
            }
        }
        else {
            return duplicateDistrictStyle;

        }
    }
    
    function featureFunctions(feature, layer) {
        districtLayers[feature.properties.dtname] = layer; // saving layer for use in district layer selection.

        //Saving the Data about Zone.
        var stateName = feature.properties["stname"];
        var districtName = feature.properties["dtname"];

        if((redZoneStates.indexOf(stateName) != -1) && (redZones[stateName].indexOf(districtName) != -1)) {
            feature.properties.zoneType = "Red Zone";
            feature.properties.zoneColor = "#ff0000";
        }
        else if((orangeZoneStates.indexOf(stateName) != -1) && (orangeZones[stateName].indexOf(districtName) != -1)) {
            feature.properties.zoneType = "Orange Zone";
            feature.properties.zoneColor = "#fa6f12";
        }
        else {
            feature.properties.zoneType = "Green Zone";
            feature.properties.zoneColor = "#00ff00";
        }

        var popUpContent = "<p> State : " + feature.properties.stname + "<br /> District : " + feature.properties.dtname + "<br /> Zone : " + feature.properties.zoneType + "</p>";
        layer.bindPopup(popUpContent); // adding Pop to every layer.
    }

    return [map, districtLayers];
}

var redZoneStyle = {
    fillColor: "#ff0000",
    fillOpacity: 0.4,
    color: "#000",
    weight: 0.3
};

var orangeZoneStyle = {
    fillColor: "#fa6f12",
    fillOpacity: 0.4,
    color: "#000",
    weight: 0.3
}

var greenZoneStyle = {
    fillColor: "#00ff00",
    fillOpacity: 0.4,
    color: "#000",
    weight: 0.3
}

var noDataZoneStyle = {
    fillColor: "#99e9e9",
    fillOpacity: 0.2,
    color: "#000",
    weight: 0.3
};

var duplicateDistrictStyle = {
    fillColor: "#fff",
    fillOpacity: 0,
    color: "#fff",
    weight: 0
};


function districtNamesAssignment(features) {// keeping a list of all state-wise districts.
    for(var index = 0; index < features.length; index++) {
        if(districtNames[features[index].properties["stname"]] == undefined) {
            districtNames[features[index].properties["stname"]] = [features[index].properties["dtname"]];
        }
        else {
            districtNames[features[index].properties["stname"]].push(features[index].properties["dtname"]);
        }
    }
}
var districtNames = {};

function createMapAt(elementId, zoomLevel = 5, latitude = 23.5937, longitude = 80.9629) {
    var map = L.map(elementId).setView([latitude, longitude], zoomLevel);

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

                onEachFeature: saveLayer
            }).addTo(map);
            if(elementId == "stateMap") {
                document.getElementById("mapBoard").style.display = "none";
            }
        }
    };

    geoFile.open("GET", "resources/india-districts-770.geojson", false);
    geoFile.send();

    if(Object.keys(districtNames).length == 0) { // keeping a one time changing list of all state-wise districts.
        districtNamesAssignment(JSONdata.features);
    }

    function districtStyling(feature) {
        var stateName = feature.properties["stname"];
        var districtName = feature.properties["dtname"];

        mappedDistricts.push(districtName);
        var redStates = Object.keys(hotspotDistricts);

        if(redStates.indexOf(stateName) != -1) {
            if(hotspotDistricts[stateName].indexOf(districtName) != -1) {
                return redZoneStyle;
            }
            else {
                return noDataZoneStyle;
            }
        }
        else {
            return noDataZoneStyle;
        }
    }

    function saveLayer(feature, layer) {
        districtLayers[feature.properties.dtname] = layer;
    }

    return [map, districtLayers];
}

var redZoneStyle = {
    fillColor: "#ff0000",
    fillOpacity: 0.4,
    color: "#ff0000",
    weight: 0.5
};

var noDataZoneStyle = {
    fillColor: "#2222ff",
    fillOpacity: 0.2,
    color: "#000",
    weight: 0.5
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
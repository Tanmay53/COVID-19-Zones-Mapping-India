var map = L.map('map').setView([23.5937, 80.9629], 5);

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

geoFile.onreadystatechange = function() {
    if((this.readyState == 4) && (this.status == 200)) {
        JSONdata = JSON.parse(geoFile.responseText);
        L.geoJSON(JSONdata, {
            style: {
                fillColor: "#2222ff",
                fillOpacity: 0.4,
                color: "#000",
                weight: 0.5
            }
        }).addTo(map);
    }
};

geoFile.open("GET", "resources/india-districts-770.geojson", false);
geoFile.send();

var districtList = JSONdata.features;

var districtNames = {};

for(var index = 0; index < districtList.length; index++) {
    if(districtNames[districtList[index].properties["stname"]] == undefined) {
        districtNames[districtList[index].properties["stname"]] = [districtList[index].properties["dtname"]];
    }
    else {
        districtNames[districtList[index].properties["stname"]].push(districtList[index].properties["dtname"]);
    }
}

console.log(districtNames);
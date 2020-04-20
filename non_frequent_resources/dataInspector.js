var dataFile = require("../resources/districtZoneData.js");

var fs = require("fs");

fs.readFile("../resources/india-districts-770.geojson", "utf-8", function(err, data) {
  var jsonData = JSON.parse(data);
  var districtList = jsonData.features;

  var districtNames = {};

  for(var index = 0; index < districtList.length; index++) {
      if(districtNames[districtList[index].properties["stname"]] == undefined) {
          districtNames[districtList[index].properties["stname"]] = [districtList[index].properties["dtname"]];
      }
      else {
          districtNames[districtList[index].properties["stname"]].push(districtList[index].properties["dtname"]);
      }
  }

  //console.log(districtNames);
  dataValidator(dataFile.largeOutbreaks);
  dataValidator(dataFile.coordinatedStates);
  dataValidator(dataFile.clusters);
  dataValidator(dataFile.orangeZones);
  function dataValidator(stateObject = {}) {
    for(key in stateObject) {

      if(districtNames[key.toUpperCase()] == undefined) {
        console.log(key);
      }
      else {
        if(stateObject.lat == undefined) {
            for(var index = 0; index < stateObject[key].length; index++) {
              if(districtNames[key].indexOf(stateObject[key][index]) == -1) {
                console.log(districtNames[key], stateObject[key][index], index);
              }
            }
        }
      }
    }
  }
});
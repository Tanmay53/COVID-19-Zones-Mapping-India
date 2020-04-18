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

  for(key in dataFile.districts) {
    var capsKey = key.toUpperCase();

    if(districtNames[capsKey] == undefined) {
      console.log(capsKey);
    }
    else {
      for(var index = 0; index < dataFile.districts[key].length; index++) {
        if(districtNames[capsKey].indexOf(dataFile.districts[key][index]) == -1) {
          console.log(districtNames[capsKey], dataFile.districts[key][index], index);
        }
      }
    }
  }
});
var stateSelector = document.getElementById("states");
var stateOptions = "<option vlaue='none'>Select a State</option>";

var keys = Object.keys(districtNames).sort();

for(var index = 0; index < keys.length; index++) {
  stateOptions += "<option value='" + keys[index] + "'> " + keys[index] + "</option>";
}

stateSelector.innerHTML = stateOptions;

var districtSelector = document.getElementById("districts");

stateSelector.addEventListener("change", function() {
  if(stateSelector.selectedIndex == 0) {
    districtSelector.style.display = "none";
  }
  else {
    var districtArray = districtNames[stateSelector.value].sort();
    var districtOptions = "<option value='none'> Select a District </option>";

    for(var index = 0; index < districtArray.length; index++) {
      districtOptions += "<option value='" + districtArray[index] + "'> " + districtArray[index] + " </option>"; 
    }

    districtSelector.innerHTML = districtOptions;
    districtSelector.style.display = "inline";
  }
})
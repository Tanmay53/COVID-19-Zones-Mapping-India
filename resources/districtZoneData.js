var hotspotDistricts = {
  "ANDHRA PRADESH": ["Kurnool", "Guntur", "S.P.S. Nellore", "Prakasam", "Krishna", "Y.S.R.", "West Godavari", "Chittoor", "Visakhapatnam", "East Godavari", "Anantapur"],

  "BIHAR": ["Siwan"],

  "CHANDIGARH": ["Chandigarh"],

  "CHHATTISGARH": ["Korba"],

  "DELHI": ["South Delhi", "South East Delhi", "Shahdara", "West Delhi", "North Delhi", "Central Delhi", "New Delhi", "East Delhi", "South West Delhi"],

  "GUJARAT": ["Ahmadabad", "Vadodara", "Surat", "Bhavnagar", "Rajkot"],

  "HARYANA": ["Nuh", "Gurugram", "Palwal", "Faridabad"],

  "JAMMU & KASHMIR": ["Srinagar", "Bandipore", "Baramula", "Jammu", "Udhampur", "Kupwara"],

  "KARNATAKA": ["Bengaluru", "Mysuru", "Belagavi"],

  "KERALA": ["Kasaragod", "Kannur", "Ernakulam", "Malappuram", "Thiruvananthapuram", "Pathanamthitta"],

  "MADHYA PRADESH": ["Indore", "Bhopal", "West Nimar", "Ujjain", "Hoshangabad"],

  "MAHARASHTRA": ["Mumbai", "Pune", "Thane", "Nagpur", "Sangli", "Ahmadnagar", "Yavatmal", "Aurangabad", "Buldana", "Mumbai Suburban", "Nashik"],

  "ODISHA": ["Khordha"],

  "PUNJAB": ["S.A.S. Nagar", "Shahid Bhagat Singh Nagar", "Jalandhar", "Pathankot"],

  "RAJASTHAN": ["Jaipur", "Tonk", "Jodhpur", "Banswara", "Kota", "Jhunjhunu", "Jaisalmer", "Bhilwara", "Bikaner", "Jhalawar", "Bharatpur"],

  "TAMIL NADU": ["Chennai", "Tiruchirappalli", "Coimbatore", "Tirunelveli", "Erode", "Vellore", "Dindigul", "Viluppuram", "Tiruppur", "Theni", "Namakkal", "Kancheepuram", "Madurai", "Thoothukkudi", "Karur", "Virudhunagar", "Kanniyakumari", "Cuddalore", "Thiruvarur", "Salem", "Nagapattinam"],

  "TELANGANA": ["Hyderabad", "Nizamabad", "Warangal Urban", "Ranga Reddy", "Jogulamba Gadwal", "Medchal Malkajgiri", "Karimnagar", "Nirmal"],

  "UTTAR PRADESH": ["Agra", "Gautam Buddha Nagar", "Meerut", "Lucknow", "Ghaziabad", "Saharanpur", "Shamli", "Firozabad", "Moradabad"],
  
  "UTTARAKHAND": ["Dehradun"],

  "WEST BENGAL": ["Kolkata", "Howrah", "Purba Medinipur", "North 24 Parganas"]
};

var stateCoordinates = {
  "ANDAMAN & NICOBAR": {
    "lat":11.66702557,
    "long":92.73598262,
    "zoom": 7
  },
  "ANDHRA PRADESH": {
    "lat":14.7504291,
    "long":78.57002559,
    "zoom": 7
  },
  "ARUNACHAL PRADESH":{
    "lat":27.10039878,
    "long":93.61660071,
    "zoom": 7
  },
  "ASSAM":{
    "lat":26.7499809,
    "long":94.21666744,
    "zoom": 7
  },
  "BIHAR":{
    "lat":25.78541445,
    "long":87.4799727,
    "zoom": 7
  },
  "CHANDIGARH":{
    "lat":30.71999697,
    "long":76.78000565,
    "zoom": 7
  },
  "CHHATTISGARH":{
    "lat":22.09042035,
    "long":82.15998734,
    "zoom": 7
  },
  "DADRA & NAGAR HAVELI":{
    "lat":20.26657819,
    "long":73.0166178,
    "zoom": 7
  },
  "DAMAN & DIU": {
    "lat":20.4283,
    "long":72.8397,
    "zoom": 7
  },
  "DELHI":{
    "lat":28.6699929,
    "long":77.23000403
  },
  "GOA":{
    "lat":15.491997,
    "long":73.81800065,
    "zoom": 7
  },
  "GUJARAT":{
    "lat":22.2587,
    "long":71.1924,
    "zoom": 7
  },
  "HARYANA":{
    "lat":28.45000633,
    "long":77.01999101,
    "zoom": 7
  },
  "HIMACHAL PRADESH":{
    "lat":31.10002545,
    "long":77.16659704,
    "zoom": 7
  },
  "JAMMU & KASHMIR":{
    "lat":34.29995933,
    "long":74.46665849,
    "zoom": 7
  },
  "JHARKHAND":{
    "lat":23.80039349,
    "long":86.41998572
  },
  "KARNATAKA":{
    "lat":12.57038129,
    "long":76.91999711,
    "zoom": 7
  },
  "KERALA":{
    "lat":8.900372741,
    "long":76.56999263,
    "zoom": 7
  },
  "LADAKH": {
    "lat":34.152588,
    "long":77.577049,
    "zoom": 7
  },
  "LAKSHADWEEP":{
    "lat":10.56257331,
    "long":72.63686717,
    "zoom": 7
  },
  "MADHYA PRADESH":{
    "lat":21.30039105,
    "long":76.13001949,
    "zoom": 7
  },
  "MAHARASHTRA":{
    "lat":19.25023195,
    "long":73.16017493,
    "zoom": 7
  },
  "MANIPUR":{
    "lat":24.79997072,
    "long":93.95001705,
    "zoom": 7
  },
  "MEGHALAYA":{
    "lat":25.57049217,
    "long":91.8800142,
    "zoom": 7
  },
  "MIZORAM":{
    "lat":23.71039899,
    "long":92.72001461,
    "zoom": 7
  },
  "NAGALAND":{
    "lat":25.6669979,
    "long":94.11657019,
    "zoom": 7
  },
  "ODISHA":{
    "lat":19.82042971,
    "long":85.90001746,
    "zoom": 7
  },
  "PUDUCHERRY":{
    "lat":11.93499371,
    "long":79.83000037,
    "zoom": 7
  },
  "PUNJAB":{
    "lat":31.51997398,
    "long":75.98000281,
    "zoom": 7
  },
  "RAJASTHAN":{
    "lat":26.44999921,
    "long":74.63998124,
    "zoom": 7
  },
  "SIKKIM":{
    "lat":27.3333303,
    "long":88.6166475,
    "zoom": 7
  },
  "TELANGANA":{
    "lat":18.1124,
    "long":79.0193,
    "zoom": 7
  },
  "TAMIL NADU":{
    "lat":12.92038576,
    "long":79.15004187,
    "zoom": 7
  },
  "TRIPURA":{
    "lat":23.83540428,
    "long":91.27999914,
    "zoom": 7
  },
  "UTTAR PRADESH":{
    "lat":27.59998069,
    "long":78.05000565,
    "zoom": 7
  },
  "UTTARAKHAND":{
    "lat":30.32040895,
    "long":78.05000565,
    "zoom": 7
  },
  "WEST BENGAL":{
    "lat":22.58039044,
    "long":88.32994665,
    "zoom": 7
  }
}

console.log(Object.keys(stateCoordinates).length);

// For Data validation through node using dataInspector.js
// exports.districts = hotspotDistricts;
// exports.coordinatedStates = stateCoordinates;
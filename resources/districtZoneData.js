var largeOutbreaks = {
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

  "TAMIL NADU": ["Chennai", "Tiruchirappalli", "Coimbatore", "Tirunelveli", "Erode", "Vellore", "Dindigul", "Viluppuram", "Tiruppur", "Theni", "Namakkal", "Kancheepuram", "Madurai", "Thoothukkudi", "Karur", "Virudhunagar", "Kanniyakumari", "Cuddalore", "Thiruvallur", "Thiruvarur", "Salem", "Nagapattinam"],

  "TELANGANA": ["Hyderabad", "Nizamabad", "Warangal Urban", "Ranga Reddy", "Jogulamba Gadwal", "Medchal Malkajgiri", "Karimnagar", "Nirmal"],

  "UTTAR PRADESH": ["Agra", "Gautam Buddha Nagar", "Meerut", "Lucknow", "Ghaziabad", "Saharanpur", "Shamli", "Firozabad", "Moradabad"],
  
  "UTTARAKHAND": ["Dehradun"],

  "WEST BENGAL": ["Kolkata", "Howrah", "Purba Medinipur", "North 24 Parganas"]
};

var clusters = {
  "ANDAMAN & NICOBAR": ["South Andaman"],
  "ASSAM": ["Golaghat", "Morigaon", "Nalbari", "Goalpara", "Dhubri"],
  "BIHAR": ["Munger", "Begusarai", "Gaya"],
  "CHHATTISGARH": ["Raipur"],
  "DELHI": ["North West Delhi"],
  "GUJARAT": ["Patan"],
  "HARYANA": ["Ambala", "Karnal"],
  "HIMACHAL PRADESH": ["Solan", "Una", "Sirmaur", "Chamba", "Kangra"],
  "JAMMU & KASHMIR": ["Shupiyan", "Rajouri"],
  "JHARKHAND": ["Ranchi", "Bokaro"],
  "KARNATAKA": ["Dakshina Kannada", "Bidar", "Kalaburagi", "Bagalkote", "Dharwad"],
  "KERALA": ["Wayanad"],
  "LADAKH": ["Kargil"],
  "MADHYA PRADESH": ["Morena"],
  "MAHARASHTRA": ["Kolhapur", "Amravati", "Palghar"],
  "ODISHA": ["Bhadrak"],
  "PUNJAB": ["Mansa", "Amritsar", "Ludhiana", "Moga"],
  "RAJASTHAN": ["Udaipur"],
  "TELANGANA": ["Nalgonda"],
  "UTTAR PRADESH": ["Bulandshahr", "Sitapur", "Basti", "Baghpat"],
  "UTTARAKHAND": ["Nainital", "Udham Singh Nagar"]
}


var orangeZones = {
  "ARUNACHAL PRADESH": ["Lohit"],
  "ASSAM": ["Cachar", "Hailakandi", "Kamrup", "Kamrup Metropolitan", "Lakhimpur", "South Salmara Mancachar", "Karimganj"],
  "BIHAR": ["Gopalganj", "Nawada", "Bhagalpur", "Saran", "Lakhisarai", "Nalanda", "Patna"],
  "CHHATTISGARH": ["Bilaspur", "Durg", "Rajnandgaon"],
  "DELHI": ["North East Delhi"],
  "GOA": ["North Goa", "South Goa"],
  "GUJARAT": ["Gandhinagar", "Bharuch", "Anand", "Kachchh", "Porbandar", "Chota Udaipur", "Mahesana", "Gir Somnath", "Dohad", "Jamnagar", "Morbi", "Panch Mahals", "Sabar Kantha", "Banas Kantha"],
  "HARYANA": ["Panchkula", "Panipat", "Sirsa", "Sonipat", "Bhiwani", "Kaithal", "Charki Dadri", "Fatehabad", "Hisar", "Jind", "Rohtak", "Kurukshetra"],
  "JAMMU & KASHMIR": ["Badgam", "Kulgam", "Pulwama", "Ganderbal", "Samba"],
  "JHARKHAND": ["Hazaribagh", "Kodarma", "Giridih"],
  "KARNATAKA": ["Ballari", "Mandya", "Bengaluru Rural", "Davanagere", "Udupi", "Gadag", "Tumakuru", "Kodagu", "Vijayapura", "Chikkaballapura", "Uttara Kannada"],
  "KERALA": ["Thrissur", "Kollam", "Idukki", "Palakkad", "Kottayam", "Alappuzha"],
  "LADAKH": ["Leh"],
  "MADHYA PRADESH": ["Barwani", "Vidisha", "Jabalpur", "East Nimar", "Dewas", "Chhindwara", "Gwalior", "Shivpuri", "Betul", "Dhar", "Raisen", "Sagar", "Shajapur", "Mandsaur", "Ratlam", "Satna", "Sheopur"],
  "MAHARASHTRA": ["Akola", "Latur", "Satara", "Ratnagiri", "Osmanabad", "Jalgaon", "Sindhudurg", "Raigarh", "Bid", "Hingoli", "Jalna", "Washim", "Gondiya", "Dhule", "Solapur"],
  "MEGHALAYA": ["East Khasi Hills"],
  "MIZORAM": ["Aizawl"],
  "ODISHA": ["Cuttack", "Dhenkanal", "Jajapur", "Kalahandi", "Kendrapara", "Puri", "Sundargarh"],
  "PUDUCHERRY": ["Puducherry", "Mahe"],
  "PUNJAB": ["Hoshiarpur", "Rupnagar", "Barnala", "Faridkot", "Fatehgarh Sahib", "Sangrur", "Kapurthala", "Patiala", "Sri Muktsar Sahib"],
  "RAJASTHAN": ["Churu", "Dausa", "Alwar", "Dungarpur", "Ajmer", "Karauli", "Pali", "Pratapgarh ", "Barmer", "Dhaulpur", "Nagaur", "Sikar", "Hanumangarh"],
  "TAMIL NADU": ["Thanjavur", "Tiruvannamalai", "Kancheepuram", "Sivaganga", "The Nilgiris", "Viluppuram", "Ramanathapuram", "Perambalur", "Ariyalur"],
  "TELANGANA": ["Suryapet", "Adilabad", "Mahabubnagar", "Kamareddy", "Vikarabad", "Sangareddy", "Medak", "Khammam", "Bhadradri Kothagudem", "Jagitial", "Jangoan", "Jayashankar", "Kumuram Bheem Asifabad", "Mulugu", "Peddapalli", "Nagarkurnool", "Mahabubabad", "Rajanna Sircilla", "Siddipet"],
  "TRIPURA": ["Gomati", "North Tripura"],
  "UTTAR PRADESH": ["Kanpur Nagar", "Varanasi", "Amroha", "Hapur", "Mahrajganj", "Pratapgarh", "Rampur", "Bareilly", "Ghazipur", "Azamgarh", "Hathras", "Muzaffarnagar", "Jaunpur", "Kheri", "Auraiya", "Banda", "Budaun", "Hardoi", "Kaushambi", "Mathura", "Mirzapur", "Rae Bareli", "Pilibhit", "Bara Banki", "Bijnor", "Prayagraj", "Shahjahanpur", "Etawah"],
  "UTTARAKHAND": ["Hardwar", "Almora", "Garhwal"],
  "WEST BENGAL": ["Kalimpong", "Jalpaiguri", "Hooghly", "Nadia", "Paschim Bardhaman", "Medinipur West", "South 24 Parganas", "Darjeeling"]
}

var stateCoordinates = {
  "ANDAMAN & NICOBAR": {
    "lat":11.66702557,
    "long":92.73598262,
    "zoom": 6
  },
  "ANDHRA PRADESH": {
    "lat":14.7504291,
    "long":78.57002559,
    "zoom": 6
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
    "zoom": 10
  },
  "CHHATTISGARH":{
    "lat":22.09042035,
    "long":82.15998734,
    "zoom": 7
  },
  "DADRA & NAGAR HAVELI":{
    "lat":20.26657819,
    "long":73.0166178,
    "zoom": 9
  },
  "DAMAN & DIU": {
    "lat":20.4283,
    "long":72.8397,
    "zoom": 8
  },
  "DELHI":{
    "lat":28.6699929,
    "long":77.23000403,
    "zoom": 9
  },
  "GOA":{
    "lat":15.491997,
    "long":73.81800065,
    "zoom": 9
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
    "long":86.41998572,
    "zoom": 7
  },
  "KARNATAKA":{
    "lat":12.57038129,
    "long":76.91999711,
    "zoom": 6
  },
  "KERALA":{
    "lat":8.900372741,
    "long":76.56999263,
    "zoom": 7
  },
  "LADAKH": {
    "lat":34.152588,
    "long":76.577049,
    "zoom": 7
  },
  "LAKSHADWEEP":{
    "lat":10.56257331,
    "long":72.63686717,
    "zoom": 7
  },
  "MADHYA PRADESH":{
    "lat":23.30039105,
    "long":78.53001949,
    "zoom": 7
  },
  "MAHARASHTRA":{
    "lat":18.25023195,
    "long":77.16017493,
    "zoom": 7
  },
  "MANIPUR":{
    "lat":24.79997072,
    "long":93.95001705,
    "zoom": 9
  },
  "MEGHALAYA":{
    "lat":25.57049217,
    "long":91.8800142,
    "zoom": 8
  },
  "MIZORAM":{
    "lat":23.71039899,
    "long":92.72001461,
    "zoom": 8
  },
  "NAGALAND":{
    "lat":25.6669979,
    "long":94.11657019,
    "zoom": 8
  },
  "ODISHA":{
    "lat":19.82042971,
    "long":85.90001746,
    "zoom": 7
  },
  "PUDUCHERRY":{
    "lat":12.93499371,
    "long":79.83000037,
    "zoom": 6
  },
  "PUNJAB":{
    "lat":31.51997398,
    "long":75.98000281,
    "zoom": 7
  },
  "RAJASTHAN":{
    "lat":26.44999921,
    "long":74.13998124,
    "zoom": 7
  },
  "SIKKIM":{
    "lat":27.3333303,
    "long":88.6166475,
    "zoom": 9
  },
  "TELANGANA":{
    "lat":18.1124,
    "long":79.0193,
    "zoom": 7
  },
  "TAMIL NADU":{
    "lat":10.92038576,
    "long":79.15004187,
    "zoom": 7
  },
  "TRIPURA":{
    "lat":23.83540428,
    "long":92.07999914,
    "zoom": 9
  },
  "UTTAR PRADESH":{
    "lat":27.59998069,
    "long":80.05000565,
    "zoom": 7
  },
  "UTTARAKHAND":{
    "lat":30.32040895,
    "long":79.05000565,
    "zoom": 8
  },
  "WEST BENGAL":{
    "lat":23.58039044,
    "long":88.32994665,
    "zoom": 7
  }
}

console.log(Object.keys(stateCoordinates).length);

// For Data validation through node using dataInspector.js
//exports.largeOutbreaks = largeOutbreaks;
//exports.clusters = clusters;
//exports.orangeZones = orangeZones;
//exports.coordinatedStates = stateCoordinates;
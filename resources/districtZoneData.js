var redZones = {
  "ANDAMAN & NICOBAR": ["South Andaman"],

  "ANDHRA PRADESH": ["Kurnool", "Guntur", "S.P.S. Nellore", "Krishna", "Chittoor"],

  "BIHAR": ["Munger", "Patna", "Rohtas", "Buxar", "Gaya"], 

  "CHANDIGARH": ["Chandigarh"],

  "CHHATTISGARH": ["Raipur"],

  "DELHI": ["South Delhi", "South East Delhi", "Shahdara", "West Delhi", "North Delhi", "Central Delhi", "New Delhi", "East Delhi", "South West Delhi", "North East Delhi", "North West Delhi"],

  "GUJARAT": ["Ahmadabad", "Vadodara", "Surat", "Anand", "Banas Kantha", "Panch Mahals", "Bhavnagar", "Gandhinagar", "Aravalli"],

  "HARYANA": ["Sonipat", "Faridabad"],

  "JAMMU & KASHMIR": ["Srinagar", "Bandipore", "Shupiyan", "Anantnag"],

  "JHARKHAND": ["Ranchi"],

  "KARNATAKA": ["Bengaluru", "Mysuru", "Bengaluru Rural"],

  "KERALA": ["Kannur", "Kottayam"],

  "MADHYA PRADESH": ["Indore", "Bhopal", "Ujjain", "Jabalpur", "Dhar", "Barwani", "East Nimar", "Dewas", "Gwalior"],

  "MAHARASHTRA": ["Mumbai", "Pune", "Thane", "Nashik", "Palghar", "Nagpur", "Solapur", "Yavatmal", "Aurangabad", "Satara", "Dhule", "Akola", "Jalgaon", "Mumbai Suburban"],

  "ODISHA": ["Jajapur", "Bhadrak", "Baleshwar"],

  "PUNJAB": ["Jalandhar", "Patiala", "Ludhiana"],

  "RAJASTHAN": ["Jaipur", "Jodhpur", "Kota", "Ajmer", "Bharatpur", "Nagaur", "Banswara", "Jhalawar"],

  "TAMIL NADU": ["Chennai", "Madurai", "Namakkal", "Thanjavur", "Thiruvallur", "Tiruppur", "Virudhunagar", "Thiruvarur", "Vellore", "Kancheepuram"],

  "TELANGANA": ["Hyderabad", "Warangal Urban", "Ranga Reddy", "Medchal Malkajgiri", "Suryapet", "Vikarabad"],

  "UTTAR PRADESH": ["Agra", "Lucknow", "Saharanpur", "Kanpur Nagar", "Moradabad", "Firozabad", "Gautam Buddha Nagar", "Bulandshahr", "Meerut", "Rae Bareli", "Varanasi", "Bijnor", "Amroha", "Sant Kabir Nagar", "Aligarh", "Muzaffarnagar", "Rampur", "Mathura", "Bareilly"],
  
  "UTTARAKHAND": ["Hardwar"],

  "WEST BENGAL": ["Kolkata", "Howrah", "North 24 Parganas", "South 24 Parganas", "Medinipur West", "Medinipur East", "Darjeeling", "Jalpaiguri", "Kalimpong", "Maldah"]
};

var orangeZones = {
  "ANDHRA PRADESH": ["West Godavari", "Y.S.R.", "Anantapur", "Prakasam", "East Godavari", "Srikakulam", "Visakhapatnam"],

  "ASSAM": ["Morigaon", "Goalpara", "Dhubri"],

  "BIHAR": ["Nalanda", "Kaimur (bhabua)", "Siwan", "Gopalganj", "Bhojpur", "Begusarai", "Aurangabad ", "Madhubani", "Purba Champaran", "Bhagalpur", "Arwal", "Saran", "Nawada", "Lakhisarai", "Banka", "Vaishali", "Darbhanga", "Jehanabad", "Madhepura", "Purnia"],

  "CHHATTISGARH": ["Korba"],

  "GUJARAT": ["Rajkot", "Bharuch", "Botad", "Narmada", "Chota Udaipur", "Mahisagar", "Mahesana", "Patan", "Kheda", "Valsad", "Dohad", "Kachchh", "Navsari", "Gir Somnath", "The Dangs", "Sabar Kantha", "Tapi", "Jamnagar", "Surendranagar"],

  "HARYANA": ["Gurugram", "Nuh", "Panipat", "Panchkula", "Palwal", "Rohtak", "Hisar", "Ambala", "Jhajjar", "Bhiwani", "Kaithal", "Kurukshetra", "Karnal", "Jind", "Sirsa", "Yamunanagar", "Fatehabad", "Charki Dadri"],

  "HIMACHAL PRADESH": ["Solan", "Una", "Sirmaur", "Chamba", "Kangra", "Hamirpur"],

  "JAMMU & KASHMIR": ["Baramula", "Kupwara", "Ganderbal", "Jammu", "Udhampur", "Kulgam", "Badgam", "Samba", "Kathua", "Rajouri", "Ramban", "Reasi"],

  "JHARKHAND": ["Bokaro", "Garhwa", "Dhanbad", "Deoghar", "Hazaribagh", "Simdega", "Giridih", "Koderma", "Jamtara"],

  "KARNATAKA": ["Ballari", "Mandya", "Gadag", "Tumakuru", "Vijayapura", "Chikkaballapura", "Uttara Kannada", "Kalaburagi", "Bagalkote", "Dharwad", "Dakshina Kannada", "Bidar"],

  "KERALA": ["Idukki", "Kasaragod", "Kozhikode", "Kollam", "Palakkad", "Pathanamthitta", "Malappuram", "Thiruvananthapuram", "Alappuzha", "Thrissur"],

  "LADAKH": ["Leh", "Kargil"],

  "MADHYA PRADESH": ["Khargone", "Raisen", "Hoshangabad", "Ratlam", "Agar Malwa", "Mandsaur", "Sagar", "Shajapur", "Chhindwara", "Alirajpur", "Tikamgarh", "Shahdol", "Sheopur", "Dindori", "Burhanpur", "Harda", "Betul", "Vidisha", "Morena"],

  "MAHARASHTRA": ["Raigarh ", "Ahmadnagar", "Amravati", "Buldana", "Nandurbar", "Kolhapur", "Hingoli", "Ratnagiri", "Jalna", "Nanded", "Chandrapur", "Parbhani", "Sangli", "Latur", "Bhandara", "Beed"],

  "MEGHALAYA": ["East Khasi Hills"],
  
  "ODISHA": ["Dhenkanal", "Kalahandi", "Kendrapara", "Sundargarh", "Khordha", "Koraput"],

  "PUDUCHERRY": ["Pondicherry"],

  "PUNJAB": ["S.A.S. Nagar", "Pathankot", "Mansa", "Tarn Taran", "Amritsar", "Kapurthala", "Hoshiarpur", "Faridkot", "Sangrur", "Shahid Bhagat Singh Nagar", "Firozpur", "Sri Muktsar Sahib", "Moga", "Gurdaspur", "Barnala"],
   
  "RAJASTHAN": ["Tonk", "Jaisalmer", "Dausa", "Jhunjhunu", "Hanumangarh", "Bhilwara", "Sawai Madhopur", "Chittaurgarh", "Dungarpur", "Udaipur", "Dhaulpur", "Sikar", "Alwar", "Bikaner", "Churu", "Pali", "Barmer", "Karauli", "Rajsamand"],

  "TAMIL NADU": ["Theni", "Nagapattinam", "Dindigul", "Viluppuram", "Coimbatore", "Cuddalore", "Salem", "Karur", "Thoothukkudi", "Tiruchirappalli", "Kanniyakumari", "Tiruvannamalai", "Ramanathapuram", "Tirunelveli", "The Nilgiris", "Sivaganga", "Perambalur", "Ariyalur", "Erode", "Pudukkottai", "Dharmapuri"],

  "TELANGANA": ["Nizamabad", "Jogulamba Gadwal", "Nirmal", "Nalgonda", "Adilabad", "Sangareddy", "Kamareddy", "Kumuram Bheem Asifabad", "Karimnagar", "Khammam", "Mahabubnagar", "Jagitial", "Rajanna Sircilla", "Jayashankar Bhupalapally", "Medak", "Jangoan", "Narayanpet", "Mancherial"],

  "TRIPURA": ["Gomati", "North Tripura"],

  "UTTAR PRADESH": ["Ghaziabad", "Hapur", "Baghpat", "Basti", "Budaun", "Sambhal", "Auraiya", "Shamli", "Sitapur", "Bahraich", "Kannauj", "Azamgarh", "Mainpuri", "Shrawasti", "Banda", "Jaunpur", "Etah", "Kasganj", "Sultanpur", "Prayagraj", "Jalaun", "Mirzapur", "Etawah", "Pratapgarh", "Ghazipur", "Gonda", "Mau", "Bhadohi", "Unnao", "Pilibhit", "Balrampur", "Ayodhya", "Gorakhpur", "Jhansi", "Hardoi", "Kaushambi"],

  "UTTARAKHAND": ["Dehradun", "Nainital"],

  "WEST BENGAL": ["Hooghly", "Paschim Bardhaman", "Nadia", "Purba Bardhaman", "Murshidabad"]
};

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
};

console.log(Object.keys(stateCoordinates).length);

// For Data validation through node using non_frequent_resources/dataInspector.js
//exports.redZones = redZones;
//exports.orangeZones = orangeZones;
//exports.coordinatedStates = stateCoordinates;
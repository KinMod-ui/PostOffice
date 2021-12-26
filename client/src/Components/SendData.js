import React, { useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddOutPackages } from "../actions/packageOutgoing";

const data = {
  countries: [
    {
      name: "India",
      states: [
        { name: "Andaman and Nicobar Islands", cities: ["Port Blair*"] },
        {
          name: "Andhra Pradesh",
          cities: [
            "Adoni",
            "Amalapuram",
            "Anakapalle",
            "Anantapur",
            "Bapatla",
            "Bheemunipatnam",
            "Bhimavaram",
            "Bobbili",
            "Chilakaluripet",
            "Chirala",
            "Chittoor",
            "Dharmavaram",
            "Eluru",
            "Gooty",
            "Gudivada",
            "Gudur",
            "Guntakal",
            "Guntur",
            "Hindupur",
            "Jaggaiahpet",
            "Jammalamadugu",
            "Kadapa",
            "Kadiri",
            "Kakinada",
            "Kandukur",
            "Kavali",
            "Kovvur",
            "Kurnool",
            "Macherla",
            "Machilipatnam",
            "Madanapalle",
            "Mandapeta",
            "Markapur",
            "Nagari",
            "Naidupet",
            "Nandyal",
            "Narasapuram",
            "Narasaraopet",
            "Narsipatnam",
            "Nellore",
            "Nidadavole",
            "Nuzvid",
            "Ongole",
            "Palacole",
            "Palasa Kasibugga",
            "Parvathipuram",
            "Pedana",
            "Peddapuram",
            "Pithapuram",
            "Ponnur",
            "Proddatur",
            "Punganur",
            "Puttur",
            "Rajahmundry",
            "Rajam",
            "Rajampet",
            "Ramachandrapuram",
            "Rayachoti",
            "Rayadurg",
            "Renigunta",
            "Repalle",
            "Salur",
            "Samalkot",
            "Sattenapalle",
            "Srikakulam",
            "Srikalahasti",
            "Srisailam Project (Right Flank Colony) Township",
            "Sullurpeta",
            "Tadepalligudem",
            "Tadpatri",
            "Tanuku",
            "Tenali",
            "Tirupati",
            "Tiruvuru",
            "Tuni",
            "Uravakonda",
            "Venkatagiri",
            "Vijayawada",
            "Vinukonda",
            "Visakhapatnam",
            "Vizianagaram",
            "Yemmiganur",
            "Yerraguntla",
          ],
        },
        { name: "Arunachal Pradesh", cities: ["Naharlagun", "Pasighat"] },
        {
          name: "Assam",
          cities: [
            "Barpeta",
            "Bongaigaon City",
            "Dhubri",
            "Dibrugarh",
            "Diphu",
            "Goalpara",
            "Guwahati",
            "Jorhat",
            "Karimganj",
            "Lanka",
            "Lumding",
            "Mangaldoi",
            "Mankachar",
            "Margherita",
            "Mariani",
            "Marigaon",
            "Nagaon",
            "Nalbari",
            "North Lakhimpur",
            "Rangia",
            "Sibsagar",
            "Silapathar",
            "Silchar",
            "Tezpur",
            "Tinsukia",
          ],
        },
        {
          name: "Bihar",
          cities: [
            "Araria",
            "Arrah",
            "Arwal",
            "Asarganj",
            "Aurangabad",
            "Bagaha",
            "Barh",
            "Begusarai",
            "Bettiah",
            "Bhabua",
            "Bhagalpur",
            "Buxar",
            "Chhapra",
            "Darbhanga",
            "Dehri-on-Sone",
            "Dumraon",
            "Forbesganj",
            "Gaya",
            "Gopalganj",
            "Hajipur",
            "Jamalpur",
            "Jamui",
            "Jehanabad",
            "Katihar",
            "Kishanganj",
            "Lakhisarai",
            "Lalganj",
            "Madhepura",
            "Madhubani",
            "Maharajganj",
            "Mahnar Bazar",
            "Makhdumpur",
            "Maner",
            "Manihari",
            "Marhaura",
            "Masaurhi",
            "Mirganj",
            "Mokameh",
            "Motihari",
            "Motipur",
            "Munger",
            "Murliganj",
            "Muzaffarpur",
            "Narkatiaganj",
            "Naugachhia",
            "Nawada",
            "Nokha",
            "Patna*",
            "Piro",
            "Purnia",
            "Rafiganj",
            "Rajgir",
            "Ramnagar",
            "Raxaul Bazar",
            "Revelganj",
            "Rosera",
            "Saharsa",
            "Samastipur",
            "Sasaram",
            "Sheikhpura",
            "Sheohar",
            "Sherghati",
            "Silao",
            "Sitamarhi",
            "Siwan",
            "Sonepur",
            "Sugauli",
            "Sultanganj",
            "Supaul",
            "Warisaliganj",
          ],
        },
        { name: "Chandigarh", cities: ["Chandigarh*"] },
        {
          name: "Chhattisgarh",
          cities: [
            "Ambikapur",
            "Bhatapara",
            "Bhilai Nagar",
            "Bilaspur",
            "Chirmiri",
            "Dalli-Rajhara",
            "Dhamtari",
            "Durg",
            "Jagdalpur",
            "Korba",
            "Mahasamund",
            "Manendragarh",
            "Mungeli",
            "Naila Janjgir",
            "Raigarh",
            "Raipur*",
            "Rajnandgaon",
            "Sakti",
            "Tilda Newra",
          ],
        },
        { name: "Dadra and Nagar Haveli", cities: ["Silvassa*"] },
        { name: "Delhi", cities: ["Delhi", "New Delhi*"] },
        { name: "Goa", cities: ["Mapusa", "Margao", "Marmagao", "Panaji*"] },
        {
          name: "Gujarat",
          cities: [
            "Adalaj",
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Anjar",
            "Ankleshwar",
            "Bharuch",
            "Bhavnagar",
            "Bhuj",
            "Chhapra",
            "Deesa",
            "Dhoraji",
            "Godhra",
            "Jamnagar",
            "Kadi",
            "Kapadvanj",
            "Keshod",
            "Khambhat",
            "Lathi",
            "Limbdi",
            "Lunawada",
            "Mahesana",
            "Mahuva",
            "Manavadar",
            "Mandvi",
            "Mangrol",
            "Mansa",
            "Mahemdabad",
            "Modasa",
            "Morvi",
            "Nadiad",
            "Navsari",
            "Padra",
            "Palanpur",
            "Palitana",
            "Pardi",
            "Patan",
            "Petlad",
            "Porbandar",
            "Radhanpur",
            "Rajkot",
            "Rajpipla",
            "Rajula",
            "Ranavav",
            "Rapar",
            "Salaya",
            "Sanand",
            "Savarkundla",
            "Sidhpur",
            "Sihor",
            "Songadh",
            "Surat",
            "Talaja",
            "Thangadh",
            "Tharad",
            "Umbergaon",
            "Umreth",
            "Una",
            "Unjha",
            "Upleta",
            "Vadnagar",
            "Vadodara",
            "Valsad",
            "Vapi",
            "Vapi",
            "Veraval",
            "Vijapur",
            "Viramgam",
            "Visnagar",
            "Vyara",
            "Wadhwan",
            "Wankaner",
          ],
        },
        {
          name: "Haryana",
          cities: [
            "Bahadurgarh",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gohana",
            "Gurgaon",
            "Hansi",
            "Hisar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Ladwa",
            "Mahendragarh",
            "Mandi Dabwali",
            "Narnaul",
            "Narwana",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Pehowa",
            "Pinjore",
            "Rania",
            "Ratia",
            "Rewari",
            "Rohtak",
            "Safidon",
            "Samalkha",
            "Sarsod",
            "Shahbad",
            "Sirsa",
            "Sohna",
            "Sonipat",
            "Taraori",
            "Thanesar",
            "Tohana",
            "Yamunanagar",
          ],
        },
        {
          name: "Himachal Pradesh",
          cities: [
            "Mandi",
            "Nahan",
            "Palampur",
            "Shimla*",
            "Solan",
            "Sundarnagar",
          ],
        },
        {
          name: "Jammu and Kashmir",
          cities: [
            "Anantnag",
            "Baramula",
            "Jammu",
            "Kathua",
            "Punch",
            "Rajauri",
            "Sopore",
            "Srinagar*",
            "Udhampur",
          ],
        },
        {
          name: "Jharkhand",
          cities: [
            "Adityapur",
            "Bokaro Steel City",
            "Chaibasa",
            "Chatra",
            "Chirkunda",
            "Medininagar (Daltonganj)",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "Giridih",
            "Gumia",
            "Hazaribag",
            "Jamshedpur",
            "Jhumri Tilaiya",
            "Lohardaga",
            "Madhupur",
            "Mihijam",
            "Musabani",
            "Pakaur",
            "Patratu",
            "Phusro",
            "Ramgarh",
            "Ranchi*",
            "Sahibganj",
            "Saunda",
            "Simdega",
            "Tenu dam-cum-Kathhara",
          ],
        },
        {
          name: "Karnataka",
          cities: [
            "Adyar",
            "Afzalpur",
            "Arsikere",
            "Athni",
            "Bengaluru",
            "Belagavi",
            "Ballari",
            "Chikkamagaluru",
            "Davanagere",
            "Gokak",
            "Hubli-Dharwad",
            "Karwar",
            "Kolar",
            "Lakshmeshwar",
            "Lingsugur",
            "Maddur",
            "Madhugiri",
            "Madikeri",
            "Magadi",
            "Mahalingapura",
            "Malavalli",
            "Malur",
            "Mandya",
            "Mangaluru",
            "Manvi",
            "Mudalagi",
            "Mudabidri",
            "Muddebihal",
            "Mudhol",
            "Mulbagal",
            "Mundargi",
            "Nanjangud",
            "Nargund",
            "Navalgund",
            "Nelamangala",
            "Pavagada",
            "Piriyapatna",
            "Puttur",
            "Rabkavi Banhatti",
            "Raayachuru",
            "Ranebennuru",
            "Ramanagaram",
            "Ramdurg",
            "Ranibennur",
            "Robertson Pet",
            "Ron",
            "Sadalagi",
            "Sagara",
            "Sakaleshapura",
            "Sindagi",
            "Sanduru",
            "Sankeshwara",
            "Saundatti-Yellamma",
            "Savanur",
            "Sedam",
            "Shahabad",
            "Shahpur",
            "Shiggaon",
            "Shikaripur",
            "Shivamogga",
            "Surapura",
            "Shrirangapattana",
            "Sidlaghatta",
            "Sindhagi",
            "Sindhnur",
            "Sira",
            "Sirsi",
            "Siruguppa",
            "Srinivaspur",
            "Tarikere",
            "Tekkalakote",
            "Terdal",
            "Talikota",
            "Tiptur",
            "Tumkur",
            "Udupi",
            "Vijayapura",
            "Wadi",
            "Yadgir",
          ],
        },
        { name: "Karnatka", cities: ["Mysore"] },
        {
          name: "Kerala",
          cities: [
            "Adoor",
            "Alappuzha",
            "Attingal",
            "Chalakudy",
            "Changanassery",
            "Cherthala",
            "Chittur-Thathamangalam",
            "Guruvayoor",
            "Kanhangad",
            "Kannur",
            "Kasaragod",
            "Kayamkulam",
            "Kochi",
            "Kodungallur",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Kunnamkulam",
            "Malappuram",
            "Mattannur",
            "Mavelikkara",
            "Mavoor",
            "Muvattupuzha",
            "Nedumangad",
            "Neyyattinkara",
            "Nilambur",
            "Ottappalam",
            "Palai",
            "Palakkad",
            "Panamattom",
            "Panniyannur",
            "Pappinisseri",
            "Paravoor",
            "Pathanamthitta",
            "Peringathur",
            "Perinthalmanna",
            "Perumbavoor",
            "Ponnani",
            "Punalur",
            "Puthuppally",
            "Koyilandy",
            "Shoranur",
            "Taliparamba",
            "Thiruvalla",
            "Thiruvananthapuram",
            "Thodupuzha",
            "Thrissur",
            "Tirur",
            "Vaikom",
            "Varkala",
            "Vatakara",
          ],
        },
        {
          name: "Madhya Pradesh",
          cities: [
            "Alirajpur",
            "Ashok Nagar",
            "Balaghat",
            "Bhopal",
            "Ganjbasoda",
            "Gwalior",
            "Indore",
            "Itarsi",
            "Jabalpur",
            "Lahar",
            "Maharajpur",
            "Mahidpur",
            "Maihar",
            "Malaj Khand",
            "Manasa",
            "Manawar",
            "Mandideep",
            "Mandla",
            "Mandsaur",
            "Mauganj",
            "Mhow Cantonment",
            "Mhowgaon",
            "Morena",
            "Multai",
            "Mundi",
            "Murwara (Katni)",
            "Nagda",
            "Nainpur",
            "Narsinghgarh",
            "Narsinghgarh",
            "Neemuch",
            "Nepanagar",
            "Niwari",
            "Nowgong",
            "Nowrozabad (Khodargama)",
            "Pachore",
            "Pali",
            "Panagar",
            "Pandhurna",
            "Panna",
            "Pasan",
            "Pipariya",
            "Pithampur",
            "Porsa",
            "Prithvipur",
            "Raghogarh-Vijaypur",
            "Rahatgarh",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rau",
            "Rehli",
            "Rewa",
            "Sabalgarh",
            "Sagar",
            "Sanawad",
            "Sarangpur",
            "Sarni",
            "Satna",
            "Sausar",
            "Sehore",
            "Sendhwa",
            "Seoni",
            "Seoni-Malwa",
            "Shahdol",
            "Shajapur",
            "Shamgarh",
            "Sheopur",
            "Shivpuri",
            "Shujalpur",
            "Sidhi",
            "Sihora",
            "Singrauli",
            "Sironj",
            "Sohagpur",
            "Tarana",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha",
            "Vijaypur",
            "Wara Seoni",
          ],
        },
        {
          name: "Maharashtra",
          cities: [
            "[[]]",
            "Ahmednagar",
            "Akola",
            "Akot",
            "Amalner",
            "Ambejogai",
            "Amravati",
            "Anjangaon",
            "Arvi",
            "Aurangabad",
            "Bhiwandi",
            "Dhule",
            "Kalyan-Dombivali",
            "Ichalkaranji",
            "Kalyan-Dombivali",
            "Karjat",
            "Latur",
            "Loha",
            "Lonar",
            "Lonavla",
            "Mahad",
            "Malegaon",
            "Malkapur",
            "Mangalvedhe",
            "Mangrulpir",
            "Manjlegaon",
            "Manmad",
            "Manwath",
            "Mehkar",
            "Mhaswad",
            "Mira-Bhayandar",
            "Morshi",
            "Mukhed",
            "Mul",
            "Greater Mumbai*",
            "Murtijapur",
            "Nagpur",
            "Nanded-Waghala",
            "Nandgaon",
            "Nandura",
            "Nandurbar",
            "Narkhed",
            "Nashik",
            "Navi Mumbai",
            "Nawapur",
            "Nilanga",
            "Osmanabad",
            "Ozar",
            "Pachora",
            "Paithan",
            "Palghar",
            "Pandharkaoda",
            "Pandharpur",
            "Panvel",
            "Parbhani",
            "Parli",
            "Partur",
            "Pathardi",
            "Pathri",
            "Patur",
            "Pauni",
            "Pen",
            "Phaltan",
            "Pulgaon",
            "Pune",
            "Purna",
            "Pusad",
            "Rahuri",
            "Rajura",
            "Ramtek",
            "Ratnagiri",
            "Raver",
            "Risod",
            "Sailu",
            "Sangamner",
            "Sangli",
            "Sangole",
            "Sasvad",
            "Satana",
            "Satara",
            "Savner",
            "Sawantwadi",
            "Shahade",
            "Shegaon",
            "Shendurjana",
            "Shirdi",
            "Shirpur-Warwade",
            "Shirur",
            "Shrigonda",
            "Shrirampur",
            "Sillod",
            "Sinnar",
            "Solapur",
            "Soyagaon",
            "Talegaon Dabhade",
            "Talode",
            "Tasgaon",
            "Thane",
            "Tirora",
            "Tuljapur",
            "Tumsar",
            "Uchgaon",
            "Udgir",
            "Umarga",
            "Umarkhed",
            "Umred",
            "Uran",
            "Uran Islampur",
            "Vadgaon Kasba",
            "Vaijapur",
            "Vasai-Virar",
            "Vita",
            "Wadgaon Road",
            "Wai",
            "Wani",
            "Wardha",
            "Warora",
            "Warud",
            "Washim",
            "Yavatmal",
            "Yawal",
            "Yevla",
          ],
        },
        {
          name: "Manipur",
          cities: ["Imphal*", "Lilong", "Mayang Imphal", "Thoubal"],
        },
        { name: "Meghalaya", cities: ["Nongstoin", "Shillong*", "Tura"] },
        { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Saiha"] },
        {
          name: "Nagaland",
          cities: [
            "Dimapur",
            "Kohima*",
            "Mokokchung",
            "Tuensang",
            "Wokha",
            "Zunheboto",
          ],
        },
        {
          name: "Odisha",
          cities: [
            "Balangir",
            "Baleshwar Town",
            "Barbil",
            "Bargarh",
            "Baripada Town",
            "Bhadrak",
            "Bhawanipatna",
            "Bhubaneswar*",
            "Brahmapur",
            "Byasanagar",
            "Cuttack",
            "Dhenkanal",
            "Jatani",
            "Jharsuguda",
            "Kendrapara",
            "Kendujhar",
            "Malkangiri",
            "Nabarangapur",
            "Paradip",
            "Parlakhemundi",
            "Pattamundai",
            "Phulabani",
            "Puri",
            "Rairangpur",
            "Rajagangapur",
            "Raurkela",
            "Rayagada",
            "Sambalpur",
            "Soro",
            "Sunabeda",
            "Sundargarh",
            "Talcher",
            "Tarbha",
            "Titlagarh",
          ],
        },
        {
          name: "Puducherry",
          cities: ["Karaikal", "Mahe", "Pondicherry*", "Yanam"],
        },
        {
          name: "Punjab",
          cities: [
            "Amritsar",
            "Barnala",
            "Batala",
            "Bathinda",
            "Dhuri",
            "Faridkot",
            "Fazilka",
            "Firozpur",
            "Firozpur Cantt.",
            "Gobindgarh",
            "Gurdaspur",
            "Hoshiarpur",
            "Jagraon",
            "Jalandhar Cantt.",
            "Jalandhar",
            "Kapurthala",
            "Khanna",
            "Kharar",
            "Kot Kapura",
            "Longowal",
            "Ludhiana",
            "Malerkotla",
            "Malout",
            "Mansa",
            "Moga",
            "Mohali",
            "Morinda, India",
            "Mukerian",
            "Muktsar",
            "Nabha",
            "Nakodar",
            "Nangal",
            "Nawanshahr",
            "Pathankot",
            "Patiala",
            "Pattran",
            "Patti",
            "Phagwara",
            "Phillaur",
            "Qadian",
            "Raikot",
            "Rajpura",
            "Rampura Phul",
            "Rupnagar",
            "Samana",
            "Sangrur",
            "Sirhind Fatehgarh Sahib",
            "Sujanpur",
            "Sunam",
            "Talwara",
            "Tarn Taran",
            "Urmar Tanda",
            "Zira",
            "Zirakpur",
          ],
        },
        {
          name: "Rajasthan",
          cities: [
            "Ajmer",
            "Alwar",
            "Bikaner",
            "Bharatpur",
            "Bhilwara",
            "Jaipur*",
            "Jodhpur",
            "Lachhmangarh",
            "Ladnu",
            "Lakheri",
            "Lalsot",
            "Losal",
            "Makrana",
            "Malpura",
            "Mandalgarh",
            "Mandawa",
            "Mangrol",
            "Merta City",
            "Mount Abu",
            "Nadbai",
            "Nagar",
            "Nagaur",
            "Nasirabad",
            "Nathdwara",
            "Neem-Ka-Thana",
            "Nimbahera",
            "Nohar",
            "Nokha",
            "Pali",
            "Phalodi",
            "Phulera",
            "Pilani",
            "Pilibanga",
            "Pindwara",
            "Pipar City",
            "Prantij",
            "Pratapgarh",
            "Raisinghnagar",
            "Rajakhera",
            "Rajaldesar",
            "Rajgarh (Alwar)",
            "Rajgarh (Churu)",
            "Rajsamand",
            "Ramganj Mandi",
            "Ramngarh",
            "Ratangarh",
            "Rawatbhata",
            "Rawatsar",
            "Reengus",
            "Sadri",
            "Sadulshahar",
            "Sadulpur",
            "Sagwara",
            "Sambhar",
            "Sanchore",
            "Sangaria",
            "Sardarshahar",
            "Sawai Madhopur",
            "Shahpura",
            "Shahpura",
            "Sheoganj",
            "Sikar",
            "Sirohi",
            "Sojat",
            "Sri Madhopur",
            "Sujangarh",
            "Sumerpur",
            "Suratgarh",
            "Taranagar",
            "Todabhim",
            "Todaraisingh",
            "Tonk",
            "Udaipur",
            "Udaipurwati",
            "Vijainagar, Ajmer",
          ],
        },
        {
          name: "Tamil Nadu",
          cities: [
            "Arakkonam",
            "Aruppukkottai",
            "Chennai*",
            "Coimbatore",
            "Erode",
            "Gobichettipalayam",
            "Kancheepuram",
            "Karur",
            "Lalgudi",
            "Madurai",
            "Manachanallur",
            "Nagapattinam",
            "Nagercoil",
            "Namagiripettai",
            "Namakkal",
            "Nandivaram-Guduvancheri",
            "Nanjikottai",
            "Natham",
            "Nellikuppam",
            "Neyveli (TS)",
            "O' Valley",
            "Oddanchatram",
            "P.N.Patti",
            "Pacode",
            "Padmanabhapuram",
            "Palani",
            "Palladam",
            "Pallapatti",
            "Pallikonda",
            "Panagudi",
            "Panruti",
            "Paramakudi",
            "Parangipettai",
            "Pattukkottai",
            "Perambalur",
            "Peravurani",
            "Periyakulam",
            "Periyasemur",
            "Pernampattu",
            "Pollachi",
            "Polur",
            "Ponneri",
            "Pudukkottai",
            "Pudupattinam",
            "Puliyankudi",
            "Punjaipugalur",
            "Ranipet",
            "Rajapalayam",
            "Ramanathapuram",
            "Rameshwaram",
            "Rasipuram",
            "Salem",
            "Sankarankoil",
            "Sankari",
            "Sathyamangalam",
            "Sattur",
            "Shenkottai",
            "Sholavandan",
            "Sholingur",
            "Sirkali",
            "Sivaganga",
            "Sivagiri",
            "Sivakasi",
            "Srivilliputhur",
            "Surandai",
            "Suriyampalayam",
            "Tenkasi",
            "Thammampatti",
            "Thanjavur",
            "Tharamangalam",
            "Tharangambadi",
            "Theni Allinagaram",
            "Thirumangalam",
            "Thirupuvanam",
            "Thiruthuraipoondi",
            "Thiruvallur",
            "Thiruvarur",
            "Thuraiyur",
            "Tindivanam",
            "Tiruchendur",
            "Tiruchengode",
            "Tiruchirappalli",
            "Tirukalukundram",
            "Tirukkoyilur",
            "Tirunelveli",
            "Tirupathur",
            "Tirupathur",
            "Tiruppur",
            "Tiruttani",
            "Tiruvannamalai",
            "Tiruvethipuram",
            "Tittakudi",
            "Udhagamandalam",
            "Udumalaipettai",
            "Unnamalaikadai",
            "Usilampatti",
            "Uthamapalayam",
            "Uthiramerur",
            "Vadakkuvalliyur",
            "Vadalur",
            "Vadipatti",
            "Valparai",
            "Vandavasi",
            "Vaniyambadi",
            "Vedaranyam",
            "Vellakoil",
            "Vellore",
            "Vikramasingapuram",
            "Viluppuram",
            "Virudhachalam",
            "Virudhunagar",
            "Viswanatham",
          ],
        },
        {
          name: "Telangana",
          cities: [
            "Adilabad",
            "Bellampalle",
            "Bhadrachalam",
            "Bhainsa",
            "Bhongir",
            "Bodhan",
            "Farooqnagar",
            "Gadwal",
            "Hyderabad*",
            "Jagtial",
            "Jangaon",
            "Kagaznagar",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Koratla",
            "Kothagudem",
            "Kyathampalle",
            "Mahbubnagar",
            "Mancherial",
            "Mandamarri",
            "Manuguru",
            "Medak",
            "Miryalaguda",
            "Nagarkurnool",
            "Narayanpet",
            "Nirmal",
            "Nizamabad",
            "Palwancha",
            "Ramagundam",
            "Sadasivpet",
            "Sangareddy",
            "Siddipet",
            "Sircilla",
            "Suryapet",
            "Tandur",
            "Vikarabad",
            "Wanaparthy",
            "Warangal",
            "Yellandu",
          ],
        },
        {
          name: "Tripura",
          cities: [
            "Agartala*",
            "Belonia",
            "Dharmanagar",
            "Kailasahar",
            "Khowai",
            "Pratapgarh",
            "Udaipur",
          ],
        },
        {
          name: "Uttar Pradesh",
          cities: [
            "Achhnera",
            "Agra",
            "Aligarh",
            "Allahabad",
            "Amroha",
            "Azamgarh",
            "Bahraich",
            "Chandausi",
            "Etawah",
            "Firozabad",
            "Fatehpur Sikri",
            "Hapur",
            "Hardoi *",
            "Jhansi",
            "Kalpi",
            "Kanpur",
            "Khair",
            "Laharpur",
            "Lakhimpur",
            "Lal Gopalganj Nindaura",
            "Lalitpur",
            "Lalganj",
            "Lar",
            "Loni",
            "Lucknow*",
            "Mathura",
            "Meerut",
            "Modinagar",
            "Moradabad",
            "Nagina",
            "Najibabad",
            "Nakur",
            "Nanpara",
            "Naraura",
            "Naugawan Sadat",
            "Nautanwa",
            "Nawabganj",
            "Nehtaur",
            "Niwai",
            "Noida",
            "Noorpur",
            "Obra",
            "Orai",
            "Padrauna",
            "Palia Kalan",
            "Parasi",
            "Phulpur",
            "Pihani",
            "Pilibhit",
            "Pilkhuwa",
            "Powayan",
            "Pukhrayan",
            "Puranpur",
            "Purquazi",
            "Purwa",
            "Rae Bareli",
            "Rampur",
            "Rampur Maniharan",
            "Rampur Maniharan",
            "Rasra",
            "Rath",
            "Renukoot",
            "Reoti",
            "Robertsganj",
            "Rudauli",
            "Rudrapur",
            "Sadabad",
            "Safipur",
            "Saharanpur",
            "Sahaspur",
            "Sahaswan",
            "Sahawar",
            "Sahjanwa",
            "Saidpur",
            "Sambhal",
            "Samdhan",
            "Samthar",
            "Sandi",
            "Sandila",
            "Sardhana",
            "Seohara",
            "Shahabad, Hardoi",
            "Shahabad, Rampur",
            "Shahganj",
            "Shahjahanpur",
            "Shamli",
            "Shamsabad, Agra",
            "Shamsabad, Farrukhabad",
            "Sherkot",
            "Shikarpur, Bulandshahr",
            "Shikohabad",
            "Shishgarh",
            "Siana",
            "Sikanderpur",
            "Sikandra Rao",
            "Sikandrabad",
            "Sirsaganj",
            "Sirsi",
            "Sitapur",
            "Soron",
            "Suar",
            "Sultanpur",
            "Sumerpur",
            "Tanda",
            "Thakurdwara",
            "Thana Bhawan",
            "Tilhar",
            "Tirwaganj",
            "Tulsipur",
            "Tundla",
            "Ujhani",
            "Unnao",
            "Utraula",
            "Varanasi",
            "Vrindavan",
            "Warhapur",
            "Zaidpur",
            "Zamania",
          ],
        },
        {
          name: "Uttarakhand",
          cities: [
            "Bageshwar",
            "Dehradun",
            "Haldwani-cum-Kathgodam",
            "Hardwar",
            "Kashipur",
            "Manglaur",
            "Mussoorie",
            "Nagla",
            "Nainital",
            "Pauri",
            "Pithoragarh",
            "Ramnagar",
            "Rishikesh",
            "Roorkee",
            "Rudrapur",
            "Sitarganj",
            "Srinagar",
            "Tehri",
          ],
        },
        {
          name: "West Bengal",
          cities: [
            "Adra",
            "Alipurduar",
            "Arambagh",
            "Asansol",
            "Baharampur",
            "Balurghat",
            "Bankura",
            "Darjiling",
            "English Bazar",
            "Gangarampur",
            "Habra",
            "Hugli-Chinsurah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kharagpur",
            "Kolkata",
            "Mainaguri",
            "Malda",
            "Mathabhanga",
            "Medinipur",
            "Memari",
            "Monoharpur",
            "Murshidabad",
            "Nabadwip",
            "Naihati",
            "Panchla",
            "Pandua",
            "Paschim Punropara",
            "Purulia",
            "Raghunathpur",
            "Raghunathganj",
            "Raiganj",
            "Rampurhat",
            "Ranaghat",
            "Sainthia",
            "Santipur",
            "Siliguri",
            "Sonamukhi",
            "Srirampore",
            "Suri",
            "Taki",
            "Tamluk",
            "Tarakeswar",
          ],
        },
      ],
    },
  ],
};

const SendData = ({ isLoading, AddOutPackages, user , sendEmailSendData}) => {
  const selectedCountry = "India";
  const [selectedStateSender, setSelectedStateSender] = React.useState();
  const [selectedCitySender, setSelectedCitySender] = React.useState();
  const [selectedStateReciever, setSelectedStateReciever] = React.useState();
  const [selectedCityReciever, setSelectedCityReciever] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCitiesSender = availableState?.states?.find(
    (s) => s.name === selectedStateSender
  );

  const availableCitiesReciever = availableState?.states?.find(
    (s) => s.name === selectedStateReciever
  );

  if (isLoading) {
    <Spinner />;
  }

  const [formData, setFormData] = useState({
    username: "",
    SenderName: " ",
    SenderLine1: "",
    SenderLine2: "",
    SenderCity: "",
    SenderState: "",
    SenderPinCode: "",
    SenderEmail: "",
    SenderMobile: "",
    RecieverName: "",
    RecieverLine1: "",
    RecieverLine2: "",
    RecieverCity: "",
    RecieverState: "",
    RecieverPinCode: "",
    RecieverMobile: "",
    packdes: "",
    PackageWeight: "",
    Price: "",
    Picked: "",
    ExtraComments: "",
    DispatchStatus: "",
  });

  const {
    SenderName,
    SenderLine1,
    SenderLine2,
    SenderCity,
    SenderState,
    SenderPinCode,
    SenderMobile,
    RecieverName,
    RecieverLine1,
    RecieverLine2,
    RecieverCity,
    RecieverState,
    RecieverPinCode,
    RecieverMobile,
    packdes,
    PackageWeight,
    Price,
    ExtraComments,
    DispatchStatus,
  } = formData;

  const onClick = (e) => {
    e.preventDefault();
    formData.SenderEmail = user.email;
    formData.DispatchStatus = "Not Dispatched";
    formData.Picked = "Not Picked";
    formData.RecieverState = selectedStateReciever;
    formData.SenderState = selectedStateSender;
    formData.SenderCity = selectedCitySender;
    formData.RecieverCity = selectedCityReciever;

    formData.username = user.username
    e.target.textContent = "Adding Package...";
    AddOutPackages(e, formData);
    
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="form-main">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="container sendForm">
                <div className="row">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sendername"
                        aria-describedby="senderName"
                        name="SenderName"
                        value={SenderName}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Address
                      </label>
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddress1"
                        aria-describedby="senderAddress1"
                        placeholder="Line 1"
                        name="SenderLine1"
                        value={SenderLine1}
                        onChange={(e) => onChange(e)}
                      />
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddress2"
                        aria-describedby="senderAddress2"
                        placeholder="Line 2"
                        name="SenderLine2"
                        value={SenderLine2}
                        onChange={(e) => onChange(e)}
                      />
                      {/* <input
                        type="textarea"
                        className="form-control add"
                        id="senderaddressCITY"
                        aria-describedby="senderAddressCITY"
                        placeholder="City"
                        name="SenderCity"
                        value={SenderCity}
                        onChange={(e) => onChange(e)}
                      /> */}

                      {/* <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {data.countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select> */}
                    </div>

                    <div>
                      <label className="form-label">State</label>
                      <select
                        className="form-control"
                        placeholder="State"
                        value={selectedStateSender}
                        onChange={(e) => setSelectedStateSender(e.target.value)}
                      >
                        <option>--Choose State--</option>
                        {availableState?.states.map((e, key) => {
                          return (
                            <option value={e.name} key={key}>
                              {e.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <label className="form-label">City</label>
                      <select
                        className="form-control"
                        placeholder="City"
                        value={selectedCitySender}
                        onChange={(e) => setSelectedCitySender(e.target.value)}
                      >
                        <option>--Choose City--</option>
                        {availableCitiesSender?.cities.map((e, key) => {
                          return (
                            <option value={e.name} key={key}>
                              {e}
                            </option>
                          );
                        })}
                      </select>
                      <label className="form-label">Pin Code</label>
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddressPIN"
                        aria-describedby="senderAddressPIN"
                        placeholder="Pin Code"
                        name="SenderPinCode"
                        value={SenderPinCode}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sendernum"
                        aria-describedby="senderNum"
                        name="SenderMobile"
                        value={SenderMobile}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recievername"
                        aria-describedby="recieverName"
                        name="RecieverName"
                        value={RecieverName}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Address
                      </label>
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddress1"
                        aria-describedby="recieverAddress1"
                        placeholder="Line 1"
                        name="RecieverLine1"
                        value={RecieverLine1}
                        onChange={(e) => onChange(e)}
                      />
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddress2"
                        aria-describedby="recieverAddress2"
                        placeholder="Line 2"
                        name="RecieverLine2"
                        value={RecieverLine2}
                        onChange={(e) => onChange(e)}
                      />

                      <div>
                        <label className="form-label">State</label>
                        <select
                          className="form-control"
                          placeholder="State"
                          value={selectedStateReciever}
                          onChange={(e) =>
                            setSelectedStateReciever(e.target.value)
                          }
                        >
                          <option>--Choose State--</option>
                          {availableState?.states.map((e, key) => {
                            return (
                              <option value={e.name} key={key}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label className="form-label">City</label>
                        <select
                          className="form-control"
                          placeholder="City"
                          value={selectedCityReciever}
                          onChange={(e) =>
                            setSelectedCityReciever(e.target.value)
                          }
                        >
                          <option>--Choose City--</option>
                          {availableCitiesReciever?.cities.map((e, key) => {
                            return (
                              <option value={e.name} key={key}>
                                {e}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* <input
                        type="textarea"
                        className="form-control add"
                        id="recieveraddressSTATE"
                        aria-describedby="recieverAddressSTATE"
                        placeholder="State"
                        name="RecieverState"
                        value={RecieverState}
                        onChange={(e) => onChange(e)}
                      /> */}
                      <label className="form-label">Pin Code</label>
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddressPIN"
                        aria-describedby="recieverAddressPIN"
                        placeholder="Pin Code"
                        name="RecieverPinCode"
                        value={RecieverPinCode}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recievernum"
                        aria-describedby="recieverNum"
                        name="RecieverMobile"
                        value={RecieverMobile}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Comments (if any)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="comments"
                        aria-describedby="comments"
                        name="ExtraComments"
                        value={ExtraComments}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn bn632-hover bn26"
                      onClick={(e) => onClick(e)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col send-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

SendData.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  AddOutPackages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.Loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { AddOutPackages })(SendData);

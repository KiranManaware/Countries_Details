const express=require('express');
const cors=require('cors')
const app=express();
require('dotenv').config();
const PORT=process.env.PORT;

//  Use CORS Middleware
app.use(cors());

// Countries Array of Object
const allCountries = [
    {
      name: "Afghanistan",
      capital: "Kabul",
      flagImage: "https://flagcdn.com/w320/af.png"
    },
    {
      name: "Albania",
      capital: "Tirana",
      flagImage: "https://flagcdn.com/w320/al.png"
    },
    {
      name: "Algeria",
      capital: "Algiers",
      flagImage: "https://flagcdn.com/w320/dz.png"
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      flagImage: "https://flagcdn.com/w320/ad.png"
    },
    {
      name: "Angola",
      capital: "Luanda",
      flagImage: "https://flagcdn.com/w320/ao.png"
    },
    {
      name: "Antigua and Barbuda",
      capital: "Saint John's",
      flagImage: "https://flagcdn.com/w320/ag.png"
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      flagImage: "https://flagcdn.com/w320/ar.png"
    },
    {
      name: "Armenia",
      capital: "Yerevan",
      flagImage: "https://flagcdn.com/w320/am.png"
    },
    {
      name: "Australia",
      capital: "Canberra",
      flagImage: "https://flagcdn.com/w320/au.png"
    },
    {
      name: "Austria",
      capital: "Vienna",
      flagImage: "https://flagcdn.com/w320/at.png"
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      flagImage: "https://flagcdn.com/w320/az.png"
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      flagImage: "https://flagcdn.com/w320/bs.png"
    },
    {
      name: "Bahrain",
      capital: "Manama",
      flagImage: "https://flagcdn.com/w320/bh.png"
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      flagImage: "https://flagcdn.com/w320/bd.png"
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      flagImage: "https://flagcdn.com/w320/bb.png"
    },
    {
      name: "Belarus",
      capital: "Minsk",
      flagImage: "https://flagcdn.com/w320/by.png"
    },
    {
      name: "Belgium",
      capital: "Brussels",
      flagImage: "https://flagcdn.com/w320/be.png"
    },
    {
      name: "Belize",
      capital: "Belmopan",
      flagImage: "https://flagcdn.com/w320/bz.png"
    },
    {
      name: "Benin",
      capital: "Porto-Novo",
      flagImage: "https://flagcdn.com/w320/bj.png"
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      flagImage: "https://flagcdn.com/w320/bt.png"
    },
    {
      name: "Bolivia",
      capital: "Sucre",
      flagImage: "https://flagcdn.com/w320/bo.png"
    },
    {
      name: "Bosnia and Herzegovina",
      capital: "Sarajevo",
      flagImage: "https://flagcdn.com/w320/ba.png"
    },
    {
      name: "Botswana",
      capital: "Gaborone",
      flagImage: "https://flagcdn.com/w320/bw.png"
    },
    {
      name: "Brazil",
      capital: "Brasília",
      flagImage: "https://flagcdn.com/w320/br.png"
    },
    {
      name: "Brunei",
      capital: "Bandar Seri Begawan",
      flagImage: "https://flagcdn.com/w320/bn.png"
    },
    {
      name: "Bulgaria",
      capital: "Sofia",
      flagImage: "https://flagcdn.com/w320/bg.png"
    },
    {
      name: "Burkina Faso",
      capital: "Ouagadougou",
      flagImage: "https://flagcdn.com/w320/bf.png"
    },
    {
      name: "Burundi",
      capital: "Gitega",
      flagImage: "https://flagcdn.com/w320/bi.png"
    },
    {
      name: "Cambodia",
      capital: "Phnom Penh",
      flagImage: "https://flagcdn.com/w320/kh.png"
    },
    {
      name: "Cameroon",
      capital: "Yaoundé",
      flagImage: "https://flagcdn.com/w320/cm.png"
    },
    {
      name: "Canada",
      capital: "Ottawa",
      flagImage: "https://flagcdn.com/w320/ca.png"
    },
    {
      name: "Cape Verde",
      capital: "Praia",
      flagImage: "https://flagcdn.com/w320/cv.png"
    },
    {
      name: "Central African Republic",
      capital: "Bangui",
      flagImage: "https://flagcdn.com/w320/cf.png"
    },
    {
      name: "Chad",
      capital: "N'Djamena",
      flagImage: "https://flagcdn.com/w320/td.png"
    },
    {
      name: "Chile",
      capital: "Santiago",
      flagImage: "https://flagcdn.com/w320/cl.png"
    },
    {
      name: "China",
      capital: "Beijing",
      flagImage: "https://flagcdn.com/w320/cn.png"
    },
    {
      name: "Colombia",
      capital: "Bogotá",
      flagImage: "https://flagcdn.com/w320/co.png"
    },
    {
      name: "Comoros",
      capital: "Moroni",
      flagImage: "https://flagcdn.com/w320/km.png"
    },
    {
      name: "Costa Rica",
      capital: "San José",
      flagImage: "https://flagcdn.com/w320/cr.png"
    },
    {
      name: "Croatia",
      capital: "Zagreb",
      flagImage: "https://flagcdn.com/w320/hr.png"
    },
    {
      name: "Cuba",
      capital: "Havana",
      flagImage: "https://flagcdn.com/w320/cu.png"
    },
    {
      name: "Cyprus",
      capital: "Nicosia",
      flagImage: "https://flagcdn.com/w320/cy.png"
    },
    {
      name: "Czech Republic",
      capital: "Prague",
      flagImage: "https://flagcdn.com/w320/cz.png"
    },
    {
      name: "Democratic Republic of the Congo",
      capital: "Kinshasa",
      flagImage: "https://flagcdn.com/w320/cd.png"
    },
    {
      name: "Denmark",
      capital: "Copenhagen",
      flagImage: "https://flagcdn.com/w320/dk.png"
    },
    {
      name: "Djibouti",
      capital: "Djibouti",
      flagImage: "https://flagcdn.com/w320/dj.png"
    },
    {
      name: "Dominica",
      capital: "Roseau",
      flagImage: "https://flagcdn.com/w320/dm.png"
    },
    {
      name: "Dominican Republic",
      capital: "Santo Domingo",
      flagImage: "https://flagcdn.com/w320/do.png"
    },
    {
      name: "Ecuador",
      capital: "Quito",
      flagImage: "https://flagcdn.com/w320/ec.png"
    },
    {
      name: "Egypt",
      capital: "Cairo",
      flagImage: "https://flagcdn.com/w320/eg.png"
    },
    {
      name: "El Salvador",
      capital: "San Salvador",
      flagImage: "https://flagcdn.com/w320/sv.png"
    },
    {
      name: "Equatorial Guinea",
      capital: "Malabo",
      flagImage: "https://flagcdn.com/w320/gq.png"
    },
    {
      name: "Eritrea",
      capital: "Asmara",
      flagImage: "https://flagcdn.com/w320/er.png"
    },
    {
      name: "Estonia",
      capital: "Tallinn",
      flagImage: "https://flagcdn.com/w320/ee.png"
    },
    {
      name: "Eswatini",
      capital: "Mbabane",
      flagImage: "https://flagcdn.com/w320/sz.png"
    },
    {
      name: "Ethiopia",
      capital: "Addis Ababa",
      flagImage: "https://flagcdn.com/w320/et.png"
    },
    {
      name: "Fiji",
      capital: "Suva",
      flagImage: "https://flagcdn.com/w320/fj.png"
    },
    {
      name: "Finland",
      capital: "Helsinki",
      flagImage: "https://flagcdn.com/w320/fi.png"
    },
    {
      name: "France",
      capital: "Paris",
      flagImage: "https://flagcdn.com/w320/fr.png"
    },
    {
      name: "Gabon",
      capital: "Libreville",
      flagImage: "https://flagcdn.com/w320/ga.png"
    },
    {
      name: "Gambia",
      capital: "Banjul",
      flagImage: "https://flagcdn.com/w320/gm.png"
    },
    {
      name: "Georgia",
      capital: "Tbilisi",
      flagImage: "https://flagcdn.com/w320/ge.png"
    },
    {
      name: "Germany",
      capital: "Berlin",
      flagImage: "https://flagcdn.com/w320/de.png"
    },
    {
      name: "Ghana",
      capital: "Accra",
      flagImage: "https://flagcdn.com/w320/gh.png"
    },
    {
      name: "Greece",
      capital: "Athens",
      flagImage: "https://flagcdn.com/w320/gr.png"
    },
    {
      name: "Grenada",
      capital: "St. George's",
      flagImage: "https://flagcdn.com/w320/gd.png"
    },
    {
      name: "Guatemala",
      capital: "Guatemala City",
      flagImage: "https://flagcdn.com/w320/gt.png"
    },
    {
      name: "Guinea",
      capital: "Conakry",
      flagImage: "https://flagcdn.com/w320/gn.png"
    },
    {
      name: "Guinea-Bissau",
      capital: "Bissau",
      flagImage: "https://flagcdn.com/w320/gw.png"
    },
    {
      name: "Guyana",
      capital: "Georgetown",
      flagImage: "https://flagcdn.com/w320/gy.png"
    },
    {
      name: "Haiti",
      capital: "Port-au-Prince",
      flagImage: "https://flagcdn.com/w320/ht.png"
    },
    {
      name: "Honduras",
      capital: "Tegucigalpa",
      flagImage: "https://flagcdn.com/w320/hn.png"
    },
    {
      name: "Hungary",
      capital: "Budapest",
      flagImage: "https://flagcdn.com/w320/hu.png"
    },
    {
      name: "Iceland",
      capital: "Reykjavik",
      flagImage: "https://flagcdn.com/w320/is.png"
    },
    {
      name: "India",
      capital: "New Delhi",
      flagImage: "https://flagcdn.com/w320/in.png"
    },
    {
      name: "Indonesia",
      capital: "Jakarta",
      flagImage: "https://flagcdn.com/w320/id.png"
    },
    {
      name: "Iran",
      capital: "Tehran",
      flagImage: "https://flagcdn.com/w320/ir.png"
    },
    {
      name: "Iraq",
      capital: "Baghdad",
      flagImage: "https://flagcdn.com/w320/iq.png"
    },
    {
      name: "Ireland",
      capital: "Dublin",
      flagImage: "https://flagcdn.com/w320/ie.png"
    },
    {
      name: "Israel",
      capital: "Jerusalem",
      flagImage: "https://flagcdn.com/w320/il.png"
    },
    {
      name: "Italy",
      capital: "Rome",
      flagImage: "https://flagcdn.com/w320/it.png"
    },
    {
      name: "Ivory Coast",
      capital: "Yamoussoukro",
      flagImage: "https://flagcdn.com/w320/ci.png"
    },
    {
      name: "Jamaica",
      capital: "Kingston",
      flagImage: "https://flagcdn.com/w320/jm.png"
    },
    {
      name: "Japan",
      capital: "Tokyo",
      flagImage: "https://flagcdn.com/w320/jp.png"
    },
    {
      name: "Jordan",
      capital: "Amman",
      flagImage: "https://flagcdn.com/w320/jo.png"
    },
    {
      name: "Kazakhstan",
      capital: "Nur-Sultan",
      flagImage: "https://flagcdn.com/w320/kz.png"
    },
    {
      name: "Kenya",
      capital: "Nairobi",
      flagImage: "https://flagcdn.com/w320/ke.png"
    },
    {
      name: "Kiribati",
      capital: "South Tarawa",
      flagImage: "https://flagcdn.com/w320/ki.png"
    },
    {
      name: "Kosovo",
      capital: "Pristina",
      flagImage: "https://flagcdn.com/w320/xk.png"
    },
    {
      name: "Kuwait",
      capital: "Kuwait City",
      flagImage: "https://flagcdn.com/w320/kw.png"
    },
    {
      name: "Kyrgyzstan",
      capital: "Bishkek",
      flagImage: "https://flagcdn.com/w320/kg.png"
    },
    {
      name: "Laos",
      capital: "Vientiane",
      flagImage: "https://flagcdn.com/w320/la.png"
    },
    {
      name: "Latvia",
      capital: "Riga",
      flagImage: "https://flagcdn.com/w320/lv.png"
    },
    {
      name: "Lebanon",
      capital: "Beirut",
      flagImage: "https://flagcdn.com/w320/lb.png"
    },
    {
      name: "Lesotho",
      capital: "Maseru",
      flagImage: "https://flagcdn.com/w320/ls.png"
    },
    {
      name: "Liberia",
      capital: "Monrovia",
      flagImage: "https://flagcdn.com/w320/lr.png"
    },
    {
      name: "Libya",
      capital: "Tripoli",
      flagImage: "https://flagcdn.com/w320/ly.png"
    },
    {
      name: "Liechtenstein",
      capital: "Vaduz",
      flagImage: "https://flagcdn.com/w320/li.png"
    },
    {
      name: "Lithuania",
      capital: "Vilnius",
      flagImage: "https://flagcdn.com/w320/lt.png"
    },
    {
      name: "Luxembourg",
      capital: "Luxembourg",
      flagImage: "https://flagcdn.com/w320/lu.png"
    },
    {
      name: "Madagascar",
      capital: "Antananarivo",
      flagImage: "https://flagcdn.com/w320/mg.png"
    },
    {
      name: "Malawi",
      capital: "Lilongwe",
      flagImage: "https://flagcdn.com/w320/mw.png"
    },
    {
      name: "Malaysia",
      capital: "Kuala Lumpur",
      flagImage: "https://flagcdn.com/w320/my.png"
    },
    {
      name: "Maldives",
      capital: "Malé",
      flagImage: "https://flagcdn.com/w320/mv.png"
    },
    {
      name: "Mali",
      capital: "Bamako",
      flagImage: "https://flagcdn.com/w320/ml.png"
    },
    {
      name: "Malta",
      capital: "Valletta",
      flagImage: "https://flagcdn.com/w320/mt.png"
    },
    {
      name: "Marshall Islands",
      capital: "Majuro",
      flagImage: "https://flagcdn.com/w320/mh.png"
    },
    {
      name: "Mauritania",
      capital: "Nouakchott",
      flagImage: "https://flagcdn.com/w320/mr.png"
    },
    {
      name: "Mauritius",
      capital: "Port Louis",
      flagImage: "https://flagcdn.com/w320/mu.png"
    },
    {
      name: "Mexico",
      capital: "Mexico City",
      flagImage: "https://flagcdn.com/w320/mx.png"
    },
    {
      name: "Micronesia",
      capital: "Palikir",
      flagImage: "https://flagcdn.com/w320/fm.png"
    },
    {
      name: "Moldova",
      capital: "Chișinău",
      flagImage: "https://flagcdn.com/w320/md.png"
    },
    {
      name: "Monaco",
      capital: "Monaco",
      flagImage: "https://flagcdn.com/w320/mc.png"
    },
    {
      name: "Mongolia",
      capital: "Ulaanbaatar",
      flagImage: "https://flagcdn.com/w320/mn.png"
    },
    {
      name: "Montenegro",
      capital: "Podgorica",
      flagImage: "https://flagcdn.com/w320/me.png"
    },
    {
      name: "Morocco",
      capital: "Rabat",
      flagImage: "https://flagcdn.com/w320/ma.png"
    },
    {
      name: "Mozambique",
      capital: "Maputo",
      flagImage: "https://flagcdn.com/w320/mz.png"
    },
    {
      name: "Myanmar",
      capital: "Naypyidaw",
      flagImage: "https://flagcdn.com/w320/mm.png"
    },
    {
      name: "Namibia",
      capital: "Windhoek",
      flagImage: "https://flagcdn.com/w320/na.png"
    },
    {
      name: "Nauru",
      capital: "Yaren",
      flagImage: "https://flagcdn.com/w320/nr.png"
    },
    {
      name: "Nepal",
      capital: "Kathmandu",
      flagImage: "https://flagcdn.com/w320/np.png"
    },
    {
      name: "Netherlands",
      capital: "Amsterdam",
      flagImage: "https://flagcdn.com/w320/nl.png"
    },
    {
      name: "New Zealand",
      capital: "Wellington",
      flagImage: "https://flagcdn.com/w320/nz.png"
    },
    {
      name: "Nicaragua",
      capital: "Managua",
      flagImage: "https://flagcdn.com/w320/ni.png"
    },
    {
      name: "Niger",
      capital: "Niamey",
      flagImage: "https://flagcdn.com/w320/ne.png"
    },
    {
      name: "Nigeria",
      capital: "Abuja",
      flagImage: "https://flagcdn.com/w320/ng.png"
    },
    {
      name: "North Korea",
      capital: "Pyongyang",
      flagImage: "https://flagcdn.com/w320/kp.png"
    },
    {
      name: "North Macedonia",
      capital: "Skopje",
      flagImage: "https://flagcdn.com/w320/mk.png"
    },
    {
      name: "Norway",
      capital: "Oslo",
      flagImage: "https://flagcdn.com/w320/no.png"
    },
    {
      name: "Oman",
      capital: "Muscat",
      flagImage: "https://flagcdn.com/w320/om.png"
    },
    {
      name: "Pakistan",
      capital: "Islamabad",
      flagImage: "https://flagcdn.com/w320/pk.png"
    },
    {
      name: "Palau",
      capital: "Ngerulmud",
      flagImage: "https://flagcdn.com/w320/pw.png"
    },
    {
      name: "Panama",
      capital: "Panama City",
      flagImage: "https://flagcdn.com/w320/pa.png"
    },
    {
      name: "Papua New Guinea",
      capital: "Port Moresby",
      flagImage: "https://flagcdn.com/w320/pg.png"
    },
    {
      name: "Paraguay",
      capital: "Asunción",
      flagImage: "https://flagcdn.com/w320/py.png"
    },
    {
      name: "Peru",
      capital: "Lima",
      flagImage: "https://flagcdn.com/w320/pe.png"
    },
    {
      name: "Philippines",
      capital: "Manila",
      flagImage: "https://flagcdn.com/w320/ph.png"
    },
    {
      name: "Poland",
      capital: "Warsaw",
      flagImage: "https://flagcdn.com/w320/pl.png"
    },
    {
      name: "Portugal",
      capital: "Lisbon",
      flagImage: "https://flagcdn.com/w320/pt.png"
    },
    {
      name: "Qatar",
      capital: "Doha",
      flagImage: "https://flagcdn.com/w320/qa.png"
    },
    {
      name: "Republic of the Congo",
      capital: "Brazzaville",
      flagImage: "https://flagcdn.com/w320/cg.png"
    },
    {
      name: "Romania",
      capital: "Bucharest",
      flagImage: "https://flagcdn.com/w320/ro.png"
    },
    {
      name: "Russia",
      capital: "Moscow",
      flagImage: "https://flagcdn.com/w320/ru.png"
    },
    {
      name: "Rwanda",
      capital: "Kigali",
      flagImage: "https://flagcdn.com/w320/rw.png"
    },
    {
      name: "Saint Kitts and Nevis",
      capital: "Basseterre",
      flagImage: "https://flagcdn.com/w320/kn.png"
    },
    {
      name: "Saint Lucia",
      capital: "Castries",
      flagImage: "https://flagcdn.com/w320/lc.png"
    },
    {
      name: "Saint Vincent and the Grenadines",
      capital: "Kingstown",
      flagImage: "https://flagcdn.com/w320/vc.png"
    },
    {
      name: "Samoa",
      capital: "Apia",
      flagImage: "https://flagcdn.com/w320/ws.png"
    },
    {
      name: "San Marino",
      capital: "San Marino",
      flagImage: "https://flagcdn.com/w320/sm.png"
    },
    {
      name: "Sao Tome and Principe",
      capital: "São Tomé",
      flagImage: "https://flagcdn.com/w320/st.png"
    },
    {
      name: "Saudi Arabia",
      capital: "Riyadh",
      flagImage: "https://flagcdn.com/w320/sa.png"
    },
    {
      name: "Senegal",
      capital: "Dakar",
      flagImage: "https://flagcdn.com/w320/sn.png"
    },
    {
      name: "Serbia",
      capital: "Belgrade",
      flagImage: "https://flagcdn.com/w320/rs.png"
    },
    {
      name: "Seychelles",
      capital: "Victoria",
      flagImage: "https://flagcdn.com/w320/sc.png"
    },
    {
      name: "Sierra Leone",
      capital: "Freetown",
      flagImage: "https://flagcdn.com/w320/sl.png"
    },
    {
      name: "Singapore",
      capital: "Singapore",
      flagImage: "https://flagcdn.com/w320/sg.png"
    },
    {
      name: "Slovakia",
      capital: "Bratislava",
      flagImage: "https://flagcdn.com/w320/sk.png"
    },
    {
      name: "Slovenia",
      capital: "Ljubljana",
      flagImage: "https://flagcdn.com/w320/si.png"
    },
    {
      name: "Solomon Islands",
      capital: "Honiara",
      flagImage: "https://flagcdn.com/w320/sb.png"
    },
    {
      name: "Somalia",
      capital: "Mogadishu",
      flagImage: "https://flagcdn.com/w320/so.png"
    },
    {
      name: "South Africa",
      capital: "Pretoria",
      flagImage: "https://flagcdn.com/w320/za.png"
    },
    {
      name: "South Korea",
      capital: "Seoul",
      flagImage: "https://flagcdn.com/w320/kr.png"
    },
    {
      name: "South Sudan",
      capital: "Juba",
      flagImage: "https://flagcdn.com/w320/ss.png"
    },
    {
      name: "Spain",
      capital: "Madrid",
      flagImage: "https://flagcdn.com/w320/es.png"
    },
    {
      name: "Sri Lanka",
      capital: "Sri Jayawardenepura Kotte",
      flagImage: "https://flagcdn.com/w320/lk.png"
    },
    {
      name: "Sudan",
      capital: "Khartoum",
      flagImage: "https://flagcdn.com/w320/sd.png"
    },
    {
      name: "Suriname",
      capital: "Paramaribo",
      flagImage: "https://flagcdn.com/w320/sr.png"
    },
    {
      name: "Sweden",
      capital: "Stockholm",
      flagImage: "https://flagcdn.com/w320/se.png"
    },
    {
      name: "Switzerland",
      capital: "Bern",
      flagImage: "https://flagcdn.com/w320/ch.png"
    },
    {
      name: "Syria",
      capital: "Damascus",
      flagImage: "https://flagcdn.com/w320/sy.png"
    },
    {
      name: "Taiwan",
      capital: "Taipei",
      flagImage: "https://flagcdn.com/w320/tw.png"
    },
    {
      name: "Tajikistan",
      capital: "Dushanbe",
      flagImage: "https://flagcdn.com/w320/tj.png"
    },
    {
      name: "Tanzania",
      capital: "Dodoma",
      flagImage: "https://flagcdn.com/w320/tz.png"
    },
    {
      name: "Thailand",
      capital: "Bangkok",
      flagImage: "https://flagcdn.com/w320/th.png"
    },
    {
      name: "Timor-Leste",
      capital: "Dili",
      flagImage: "https://flagcdn.com/w320/tl.png"
    },
    {
      name: "Togo",
      capital: "Lomé",
      flagImage: "https://flagcdn.com/w320/tg.png"
    },
    {
      name: "Tonga",
      capital: "Nuku'alofa",
      flagImage: "https://flagcdn.com/w320/to.png"
    },
    {
      name: "Trinidad and Tobago",
      capital: "Port of Spain",
      flagImage: "https://flagcdn.com/w320/tt.png"
    },
    {
      name: "Tunisia",
      capital: "Tunis",
      flagImage: "https://flagcdn.com/w320/tn.png"
    },
    {
      name: "Turkey",
      capital: "Ankara",
      flagImage: "https://flagcdn.com/w320/tr.png"
    },
    {
      name: "Turkmenistan",
      capital: "Ashgabat",
      flagImage: "https://flagcdn.com/w320/tm.png"
    },
    {
      name: "Tuvalu",
      capital: "Funafuti",
      flagImage: "https://flagcdn.com/w320/tv.png"
    },
    {
      name: "Uganda",
      capital: "Kampala",
      flagImage: "https://flagcdn.com/w320/ug.png"
    },
    {
      name: "Ukraine",
      capital: "Kyiv",
      flagImage: "https://flagcdn.com/w320/ua.png"
    },
    {
      name: "United Arab Emirates",
      capital: "Abu Dhabi",
      flagImage: "https://flagcdn.com/w320/ae.png"
    },
    {
      name: "United Kingdom",
      capital: "London",
      flagImage: "https://flagcdn.com/w320/gb.png"
    },
    {
      name: "United States",
      capital: "Washington, D.C.",
      flagImage: "https://flagcdn.com/w320/us.png"
    },
    {
      name: "Uruguay",
      capital: "Montevideo",
      flagImage: "https://flagcdn.com/w320/uy.png"
    },
    {
      name: "Uzbekistan",
      capital: "Tashkent",
      flagImage: "https://flagcdn.com/w320/uz.png"
    },
    {
      name: "Vanuatu",
      capital: "Port Vila",
      flagImage: "https://flagcdn.com/w320/vu.png"
    },
    {
      name: "Vatican City",
      capital: "Vatican City",
      flagImage: "https://flagcdn.com/w320/va.png"
    },
    {
      name: "Venezuela",
      capital: "Caracas",
      flagImage: "https://flagcdn.com/w320/ve.png"
    },
    {
      name: "Vietnam",
      capital: "Hanoi",
      flagImage: "https://flagcdn.com/w320/vn.png"
    },
    {
      name: "Yemen",
      capital: "Sana'a",
      flagImage: "https://flagcdn.com/w320/ye.png"
    },
    {
      name: "Zambia",
      capital: "Lusaka",
      flagImage: "https://flagcdn.com/w320/zm.png"
    },
    {
      name: "Zimbabwe",
      capital: "Harare",
      flagImage: "https://flagcdn.com/w320/zw.png"
    }
  ];
  
  // Route to get a random object
  app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * allCountries.length);
    const randomObject = allCountries[randomIndex];
    res.json(randomObject);
  });

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
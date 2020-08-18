var express = require('express');
var parser=require('body-parser')
var router = express.Router();
var request = require('request');
//var data = require('../turkiye');
const cheerio = require('cheerio');
var scrap = require('../service/scraping');

/* GET home page. */

router.get('/:id', function(req, res, next) {
  const id = req.params['id']
  ////////////////////////////////////Find City From Json //////////////////////////////////
  for(var i=0;i<data.length;i++) {
   if(data[i].id==id) {
      var cityname=data[i].name
   }
  }
///////////////////////////////////////////////////////////////////////////////////////////
  const Url='https://ecza.io/'+cityname.toLowerCase()+'-nobetci-eczane';
  var EczaneArray=new Array;
  request(Url,function(error,response,html) {
    if(!error&&response.statusCode==200) {
      var $=cheerio.load(html)
      //var link=$('.container').find('.page25-content > div')
      //var link=$('.container').children().find('.row page25-content')  
     //var link=$('.container').find('.col-sm-12').find('.row').find('.page25-content')
     var link=$('.container').find('.col-sm-12').find('.row').first().find('.page25-content')
     var link2= $('.container').find('.col-sm-12').find('.row').first().find('.eczane_sonuc').find('.page25-content')
    console.log(link2.html())
     for (let i = 0; i < link.length; i++) {
        var eczaneAdi = $(link[i]).find('.Proin-text-wrap h6')
        var eczaneAdresi=$(link[i]).find('.Proin-text-wrap p').first()
        var eczaneTel=$(link[i]).find('.Proin-text-wrap p a')
        var obj={
          'eczaneAdi':eczaneAdi.text().toString(),
          'eczaneAdresi':eczaneAdresi.text().toString().slice(6),
          'eczaneTel':eczaneTel.text().toString()
        }
         EczaneArray.push(obj);
      }
      //console.log(JSON.stringify(EczaneArray))
         res.send(JSON.stringify(EczaneArray));
    }
  })  
 // const parsed=JSON.stringify(EczaneArray);
});

var data= [
  {
    "id": 1,
    "name": "Adana",
    "latitude": "37.0000",
    "longitude": "35.3213",
    "population": 2183167,
    "region": "Akdeniz"
  },
  {
    "id": 2,
    "name": "Adiyaman",
    "latitude": "37.7648",
    "longitude": "38.2786",
    "population": 602774,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 3,
    "name": "Afyonkarahisar",
    "latitude": "38.7507",
    "longitude": "30.5567",
    "population": 709015,
    "region": "Ege"
  },
  {
    "id": 4,
    "name": "Agri",
    "latitude": "39.7191",
    "longitude": "43.0503",
    "population": 547210,
    "region": "Doğu Anadolu"
  },
  {
    "id": 5,
    "name": "Amasya",
    "latitude": "40.6499",
    "longitude": "35.8353",
    "population": 322167,
    "region": "Karadeniz"
  },
  {
    "id": 6,
    "name": "Ankara",
    "latitude": "39.9208",
    "longitude": "32.8541",
    "population": 5270575,
    "region": "İç Anadolu"
  },
  {
    "id": 7,
    "name": "Antalya",
    "latitude": "36.8841",
    "longitude": "30.7056",
    "population": 2288456,
    "region": "Akdeniz"
  },
  {
    "id": 8,
    "name": "Artvin",
    "latitude": "41.1828",
    "longitude": "41.8183",
    "population": 168370,
    "region": "Karadeniz"
  },
  {
    "id": 9,
    "name": "Aydin",
    "latitude": "37.8560",
    "longitude": "27.8416",
    "population": 1053506,
    "region": "Ege"
  },
  {
    "id": 10,
    "name": "Balikesir",
    "latitude": "39.6484",
    "longitude": "27.8826",
    "population": 1186688,
    "region": "Ege"
  },
  {
    "id": 11,
    "name": "Bilecik",
    "latitude": "40.0567",
    "longitude": "30.0665",
    "population": 212361,
    "region": "Marmara"
  },
  {
    "id": 12,
    "name": "Bingol",
    "latitude": "39.0626",
    "longitude": "40.7696",
    "population": 267184,
    "region": "Doğu Anadolu"
  },
  {
    "id": 13,
    "name": "Bitlis",
    "latitude": "38.3938",
    "longitude": "42.1232",
    "population": 267184,
    "region": "Doğu Anadolu"
  },
  {
    "id": 14,
    "name": "Bolu",
    "latitude": "40.5760",
    "longitude": "31.5788",
    "population": 291095,
    "region": "Karadeniz"
  },
  {
    "id": 15,
    "name": "Burdur",
    "latitude": "37.4613",
    "longitude": "30.0665",
    "population": 258339,
    "region": "Akdeniz"
  },
  {
    "id": 16,
    "name": "Bursa",
    "latitude": "40.2669",
    "longitude": "29.0634",
    "population": 2842547,
    "region": "Marmara"
  },
  {
    "id": 17,
    "name": "Canakkale",
    "latitude": "40.1553",
    "longitude": "26.4142",
    "population": 513341,
    "region": "Marmara"
  },
  {
    "id": 18,
    "name": "Cankiri",
    "latitude": "40.6013",
    "longitude": "33.6134",
    "population": 180945,
    "region": "İç Anadolu"
  },
  {
    "id": 19,
    "name": "Corum",
    "latitude": "40.5506",
    "longitude": "34.9556",
    "population": 525180,
    "region": "Karadeniz"
  },
  {
    "id": 20,
    "name": "Denizli",
    "latitude": "37.7765",
    "longitude": "29.0864",
    "population": 993442,
    "region": "Ege"
  },
  {
    "id": 21,
    "name": "Diyarbakir",
    "latitude": "37.9144",
    "longitude": "40.2306",
    "population": 1654196,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 22,
    "name": "Edirne",
    "latitude": "41.6818",
    "longitude": "26.5623",
    "population": 402537,
    "region": "Marmara"
  },
  {
    "id": 23,
    "name": "Elazig",
    "latitude": "38.6810",
    "longitude": "39.2264",
    "population": 574304,
    "region": "Doğu Anadolu"
  },
  {
    "id": 24,
    "name": "Erzincan",
    "latitude": "39.7500",
    "longitude": "39.5000",
    "population": 222918,
    "region": "Doğu Anadolu"
  },
  {
    "id": 25,
    "name": "Erzurum",
    "latitude": "39.9000",
    "longitude": "41.2700",
    "population": 762321,
    "region": "Doğu Anadolu"
  },
  {
    "id": 26,
    "name": "Eskisehir",
    "latitude": "39.7767",
    "longitude": "30.5206",
    "population": 826716,
    "region": "İç Anadolu"
  },
  {
    "id": 27,
    "name": "Gaziantep",
    "latitude": "37.0662",
    "longitude": "37.3833",
    "population": 1931836,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 28,
    "name": "Giresun",
    "latitude": "40.9128",
    "longitude": "38.3895",
    "population": 426686,
    "region": "Karadeniz"
  },
  {
    "id": 29,
    "name": "Gumushane",
    "latitude": "40.4386",
    "longitude": "39.5086",
    "population": 151449,
    "region": "Karadeniz"
  },
  {
    "id": 30,
    "name": "Hakkari",
    "latitude": "37.5833",
    "longitude": "43.7333",
    "population": 278775,
    "region": "Doğu Anadolu"
  },
  {
    "id": 31,
    "name": "Hatay",
    "latitude": "36.4018",
    "longitude": "36.3498",
    "population": 1533507,
    "region": "Akdeniz"
  },
  {
    "id": 32,
    "name": "isparta",
    "latitude": "37.7648",
    "longitude": "30.5566",
    "population": 421766,
    "region": "Akdeniz"
  },
  {
    "id": 33,
    "name": "Mersin",
    "latitude": "36.8000",
    "longitude": "34.6333",
    "population": 1745221,
    "region": "Akdeniz"
  },
  {
    "id": 34,
    "name": "istanbul",
    "latitude": "41.0053",
    "longitude": "28.9770",
    "population": 14657434,
    "region": "Marmara"
  },
  {
    "id": 35,
    "name": "izmir",
    "latitude": "38.4189",
    "longitude": "27.1287",
    "population": 4168415,
    "region": "Ege"
  },
  {
    "id": 36,
    "name": "Kars",
    "latitude": "40.6167",
    "longitude": "43.1000",
    "population": 292660,
    "region": "Doğu Anadolu"
  },
  {
    "id": 37,
    "name": "Kastamonu",
    "latitude": "41.3887",
    "longitude": "33.7827",
    "population": 372633,
    "region": "Karadeniz"
  },
  {
    "id": 38,
    "name": "Kayseri",
    "latitude": "38.7312",
    "longitude": "35.4787",
    "population": 1341056,
    "region": "İç Anadolu"
  },
  {
    "id": 39,
    "name": "Kırklareli",
    "latitude": "41.7333",
    "longitude": "27.2167",
    "population": 346973,
    "region": "Marmara"
  },
  {
    "id": 40,
    "name": "Kirsehir",
    "latitude": "39.1425",
    "longitude": "34.1709",
    "population": 225562,
    "region": "İç Anadolu"
  },
  {
    "id": 41,
    "name": "Kocaeli",
    "latitude": "40.8533",
    "longitude": "29.8815",
    "population": 1780055,
    "region": "Marmara"
  },
  {
    "id": 42,
    "name": "Konya",
    "latitude": "37.8667",
    "longitude": "32.4833",
    "population": 2130544,
    "region": "İç Anadolu"
  },
  {
    "id": 43,
    "name": "Kutahya",
    "latitude": "39.4167",
    "longitude": "29.9833",
    "population": 571463,
    "region": "Ege"
  },
  {
    "id": 44,
    "name": "Malatya",
    "latitude": "38.3552",
    "longitude": "38.3095",
    "population": 772904,
    "region": "Doğu Anadolu"
  },
  {
    "id": 45,
    "name": "Manisa",
    "latitude": "38.6191",
    "longitude": "27.4289",
    "population": 1380366,
    "region": "Ege"
  },
  {
    "id": 46,
    "name": "Kahramanmaras",
    "latitude": "37.5858",
    "longitude": "36.9371",
    "population": 1096610,
    "region": "Akdeniz"
  },
  {
    "id": 47,
    "name": "Mardin",
    "latitude": "37.3212",
    "longitude": "40.7245",
    "population": 796591,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 48,
    "name": "Mugla",
    "latitude": "37.2153",
    "longitude": "28.3636",
    "population": 908877,
    "region": "Ege"
  },
  {
    "id": 49,
    "name": "Mus",
    "latitude": "38.9462",
    "longitude": "41.7539",
    "population": 408728,
    "region": "Doğu Anadolu"
  },
  {
    "id": 50,
    "name": "Nevsehir",
    "latitude": "38.6939",
    "longitude": "34.6857",
    "population": 286767,
    "region": "İç Anadolu"
  },
  {
    "id": 51,
    "name": "Nigde",
    "latitude": "37.9667",
    "longitude": "34.6833",
    "population": 346114,
    "region": "İç Anadolu"
  },
  {
    "id": 52,
    "name": "Ordu",
    "latitude": "40.9839",
    "longitude": "37.8764",
    "population": 728949,
    "region": "Karadeniz"
  },
  {
    "id": 53,
    "name": "Rize",
    "latitude": "41.0201",
    "longitude": "40.5234",
    "population": 328979,
    "region": "Karadeniz"
  },
  {
    "id": 54,
    "name": "Sakarya",
    "latitude": "40.6940",
    "longitude": "30.4358",
    "population": 953181,
    "region": "Marmara"
  },
  {
    "id": 55,
    "name": "Samsun",
    "latitude": "41.2928",
    "longitude": "36.3313",
    "population": 1279884,
    "region": "Karadeniz"
  },
  {
    "id": 56,
    "name": "Siirt",
    "latitude": "37.9333",
    "longitude": "41.9500",
    "population": 320351,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 57,
    "name": "Sinop",
    "latitude": "42.0231",
    "longitude": "35.1531",
    "population": 204133,
    "region": "Karadeniz"
  },
  {
    "id": 58,
    "name": "Sivas",
    "latitude": "39.7477",
    "longitude": "37.0179",
    "population": 618617,
    "region": "İç Anadolu"
  },
  {
    "id": 59,
    "name": "Tekirdag",
    "latitude": "40.9833",
    "longitude": "27.5167",
    "population": 937910,
    "region": "Marmara"
  },
  {
    "id": 60,
    "name": "Tokat",
    "latitude": "40.3167",
    "longitude": "36.5500",
    "population": 593990,
    "region": "Karadeniz"
  },
  {
    "id": 61,
    "name": "Trabzon",
    "latitude": "41.0015",
    "longitude": "39.7178",
    "population": 768417,
    "region": "Karadeniz"
  },
  {
    "id": 62,
    "name": "Tunceli",
    "latitude": "39.3074",
    "longitude": "39.4388",
    "population": 86076,
    "region": "Doğu Anadolu"
  },
  {
    "id": 63,
    "name": "Sanliurfa",
    "latitude": "37.1591",
    "longitude": "38.7969",
    "population": 1892320,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 64,
    "name": "Usak",
    "latitude": "38.6823",
    "longitude": "29.4082",
    "population": 353048,
    "region": "Ege"
  },
  {
    "id": 65,
    "name": "Van",
    "latitude": "38.4891",
    "longitude": "43.4089",
    "population": 1096397,
    "region": "Doğu Anadolu"
  },
  {
    "id": 66,
    "name": "Yozgat",
    "latitude": "39.8181",
    "longitude": "34.8147",
    "population": 419440,
    "region": "İç Anadolu"
  },
  {
    "id": 67,
    "name": "Zonguldak",
    "latitude": "41.4564",
    "longitude": "31.7987",
    "population": 595907,
    "region": "Karadeniz"
  },
  {
    "id": 68,
    "name": "Aksaray",
    "latitude": "38.3687",
    "longitude": "34.0370",
    "population": 386514,
    "region": "İç Anadolu"
  },
  {
    "id": 69,
    "name": "Bayburt",
    "latitude": "40.2552",
    "longitude": "40.2249",
    "population": 78550,
    "region": "Karadeniz"
  },
  {
    "id": 70,
    "name": "Karaman",
    "latitude": "37.1759",
    "longitude": "33.2287",
    "population": 242196,
    "region": "İç Anadolu"
  },
  {
    "id": 71,
    "name": "Kirikkale",
    "latitude": "39.8468",
    "longitude": "33.5153",
    "population": 270271,
    "region": "İç Anadolu"
  },
  {
    "id": 72,
    "name": "Batman",
    "latitude": "37.8812",
    "longitude": "41.1351",
    "population": 566633,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 73,
    "name": "Sirnak",
    "latitude": "37.4187",
    "longitude": "42.4918",
    "population": 490184,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 74,
    "name": "Bartin",
    "latitude": "41.5811",
    "longitude": "32.4610",
    "population": 190708,
    "region": "Karadeniz"
  },
  {
    "id": 75,
    "name": "Ardahan",
    "latitude": "41.1105",
    "longitude": "42.7022",
    "population": 99265,
    "region": "Doğu Anadolu"
  },
  {
    "id": 76,
    "name": "igdir",
    "latitude": "39.8880",
    "longitude": "44.0048",
    "population": 192435,
    "region": "Doğu Anadolu"
  },
  {
    "id": 77,
    "name": "Yalova",
    "latitude": "40.6500",
    "longitude": "29.2667",
    "population": 233009,
    "region": "Marmara"
  },
  {
    "id": 78,
    "name": "Karabuk",
    "latitude": "41.2061",
    "longitude": "32.6204",
    "population": 236978,
    "region": "Karadeniz"
  },
  {
    "id": 79,
    "name": "Kilis",
    "latitude": "36.7184",
    "longitude": "37.1212",
    "population": 130655,
    "region": "Güneydoğu Anadolu"
  },
  {
    "id": 80,
    "name": "Osmaniye",
    "latitude": "37.2130",
    "longitude": "36.1763",
    "population": 512873,
    "region": "Akdeniz"
  },
  {
    "id": 81,
    "name": "Duzce",
    "latitude": "40.8438",
    "longitude": "31.1565",
    "population": 360388,
    "region": "Karadeniz"
  }
]
module.exports = router;

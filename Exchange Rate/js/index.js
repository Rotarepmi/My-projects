window.onload = function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == xmlhttp.DONE && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "http://api.nbp.pl/api/exchangerates/tables/A/?format=xml", true);
  xmlhttp.send();
}

function myFunction(xml) {

  var xmlDoc = xml.responseXML;
  var table="<tr><th>Nazwa waluty</th><th>Kod waluty</th><th>Kurs waluty</th></tr>";
  var x = xmlDoc.getElementsByTagName("Rate");
  
  for (var i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Currency")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Code")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Mid")[0].childNodes[0].nodeValue + " zł" +
    "</td></tr>";
  }
  
  var date = xmlDoc.getElementsByTagName("EffectiveDate")[0].childNodes[0].nodeValue;
  
  document.getElementById("date").innerHTML = "Kurs walut wg Narodowego Banku Polskiego na dzień: "+date;
  document.getElementById("table").innerHTML = table;
}
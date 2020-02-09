
var date;
var next;
var prev;
var dafLength;
var enPasuk;
fetch('https://www.sefaria.org/api/calendars/')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
   document.getElementById('date').innerHTML = myJson.date;
   document.getElementById('pages').innerText = myJson.calendar_items[3].url;
   date = myJson.calendar_items[3].url;
   fetch('https://www.sefaria.org/api/texts/' + date)
  .then(function(response) {
    return response.json()
  })
 .then(function(textPull){
   enPasuk = textPull.text;
   hePasuk = textPull.he;
   count = 0;
   for (var pasuk of enPasuk) {
     var i = pasuk;
    var ul = document.getElementById("enText"); 
    var li = document.createElement("li");
    li.innerHTML = hePasuk[count] + "<br>"+"<br>" + "<span>" + pasuk + "</span> <br> <br>";
    ul.appendChild(li);
    count++;
  }
  document.getElementById("next").innerHTML = textPull.next;
  next = textPull.next;
  prev = textPull.prev;
 })
  })

function nextPage(){
  fetch('https://www.sefaria.org/api/texts/' + next)
  .then(function(response){
    return response.json()
  })
  .then(function(nextPull){
    document.getElementById('nextHeText').innerHTML = nextPull.he;
    document.getElementById('nextText').innerHTML=nextPull.text;
    document.getElementById('next').innerHTML = nextPull.next;
    document.getElementById('pages').innerText = nextPull.title;
  })
}

function nextnextPage(){
  fetch('https://www.sefaria.org/api/texts/' + next)
  .then(function(response){
    return response.json()
  })
  .then(function(nextPull){
    document.getElementById('nextnextHeText').innerHTML = nextPull.he;
    document.getElementById('nextnextText').innerHTML=nextPull.text;
    document.getElementById('next').style.display = "none";
  })
}


function prevPage(){
  fetch('https://www.sefaria.org/api/texts/' + prev)
  .then(function(response){
    return response.json()
  })
  .then(function(prevPull){
    document.getElementById('heText').innerHTML = prevPull.he;
    document.getElementById('enText').innerHTML = prevPull.text;
    document.getElementById("next").innerHTML = prevPull.next;
    document.getElementById('pages').innerText = prevPull.title;
    next = prevPull.next;
    prev = prevPull.prev;
  })
}
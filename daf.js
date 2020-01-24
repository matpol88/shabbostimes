
var date;
var next;
var prev;
fetch('https://www.sefaria.org/api/calendars/')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
   document.getElementById('date').innerHTML = myJson.date;
   document.getElementById('pages').innerText = myJson.calendar_items[2].url;
   date = myJson.calendar_items[2].url;
   fetch('https://www.sefaria.org/api/texts/' + date)
  .then(function(response) {
    return response.json()
  })
 .then(function(textPull){
  document.getElementById("enText").innerHTML = textPull.text;
  document.getElementById("heText").innerHTML = textPull.he;
  document.getElementById("next").innerHTML = textPull.next;
  next = textPull.next;
  prev = textPull.prev;
  document.getElementById('prevpages').innerHTML = prev
 })
  })

function prevPage(){
  fetch('https://www.sefaria.org/api/texts/' + prev)
  .then(function(response){
    return response.json()
  })
  .then(function(prevPull){
    document.getElementById('heText').innerHTML = prevPull.he;
    document.getElementById('enText').innerHTML = prevPull.text;
    document.getElementById("next").innerHTML = prevPull.next;
    next = prevPull.next;
  })
}

function nextPage(){
  fetch('https://www.sefaria.org/api/texts/' + next)
  .then(function(response){
    return response.json()
  })
  .then(function(nextPull){
    document.getElementById('nextHeText').innerHTML = nextPull.he;
    document.getElementById('nextText').innerHTML=nextPull.text;
    document.getElementById('next').style.display = "none";
  })
}

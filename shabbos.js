<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var shabbos = JSON.parse(this.responseText);
    document.getElementById("heading").innerHTML = "<h3>Shabbos times for: " +shabbos.location.title +"</h3>";
    document.getElementById("parsha").innerHTML = "This week's Torah portion is: "+shabbos.items[1].title;
    
    var d = new Date(shabbos.items[0].date);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var formattedDate = days[d.getDay()]+ " " + d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    document.getElementById("candleLighting").innerHTML = shabbos.items[0].title + " on " + formattedDate;

    var e = new Date(shabbos.items[2].date);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var formattedDate = days[e.getDay()]+ " " + e.getDate() + "-" + (e.getMonth() + 1) + "-" + e.getFullYear();
    document.getElementById("havdala").innerHTML = shabbos.items[2].title + " on " + formattedDate;
  }
};
xmlhttp.open("GET", "https://www.hebcal.com/shabbat/?cfg=json&geonameid=5111974&m=50", true);
xmlhttp.send();


</script>

<script>
function changeColor(){
var body = document.querySelector("body");
body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}
</script>
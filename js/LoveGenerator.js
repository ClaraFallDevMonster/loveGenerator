function lovegenerator() {
var yourName = "";
var Othername = "";
yourName = document.getElementById("YourName").value;
otherName = document.getElementById("OtherName").value;
var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) +1;

if (loveScore > 80) {
  document.getElementById("prozent").innerHTML = "Your love score with " + otherName + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Your love score nkhfhdlfhslgflsgf";
}
else if (loveScore > 60 && loveScore <= 80) {
  document.getElementById("prozent").innerHTML = "Your love score with " + otherName + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Your love score nkhfhdlfhslgflsgf";
}
else if (loveScore > 30 && loveScore <= 60) {
  document.getElementById("prozent").innerHTML = "Your love score with " + otherName + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Your love score nkhfhdlfhslgflsgf";
}
else {
  document.getElementById("prozent").innerHTML = "Your love score with " + otherName + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Your love score nkhfhdlfhslgflsgf";
}
}

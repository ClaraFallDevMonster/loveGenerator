function lovegenerator() {
var yourName = "";
var Othername = "";
yourName = document.getElementById("YourName").value;
otherName = document.getElementById("OtherName").value;
var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) +1;

if (loveScore > 80) {
  document.getElementById("prozent").innerHTML = "Dein Liebes-Score mit " + otherName + " ist " + loveScore + "%";
  document.getElementById("text").innerHTML = "Der richtige Deckel für deinen hässlichen Topf. Kaufe ihm oder ihr am besten sofort hübsche Unterwäsche.";
}
else if (loveScore > 60 && loveScore <= 80) {
  document.getElementById("prozent").innerHTML = "Dein Liebes-Score mit " + otherName + " ist " + loveScore + "%";
  document.getElementById("text").innerHTML = "So weit so gut! Geh mal auf Tuchfühlung. Wenn's im Bett läuft, gib der Person eine Chance.";
}
else if (loveScore > 30 && loveScore <= 60) {
  document.getElementById("prozent").innerHTML = "Dein Liebes-Score mit " + otherName + " ist " + loveScore + "%";
  document.getElementById("text").innerHTML = "Ihr könnt ein Paar werden, aber ihr werdet viel Streiten, Teller werfen und euch mit Nudelhölzern verprügeln. Solange er/sie gut im Bett ist, wirst du glücklich sein.";
}
else {
  document.getElementById("prozent").innerHTML = "Dein Liebes-Score mit " + otherName + " ist " + loveScore + "%";
  document.getElementById("text").innerHTML = "Diese Person ist nicht die richtige! Am besten einen Korb geben, eine Abfuhr, eine Backpfeife, einen Arschtritt. Falls diese Person allerdings Freundschaft Plus will - schlag zu.";
}
}

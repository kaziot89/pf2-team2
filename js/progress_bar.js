var text = "Ładujemy wiosnę";
var total = text.length;
var current = 0;

function updateProgress() {
  var progressBar = document.getElementById("progress");
  var percent = (current / total) * 100;
  progressBar.style.width = percent + "%";
  document.getElementById("text").innerHTML =
    "Ładujemy wiosnę: " + percent.toFixed(1) + "% Zakończono";
  current++;
  if (current <= total) {
    setTimeout(updateProgress, 100);
  }
}

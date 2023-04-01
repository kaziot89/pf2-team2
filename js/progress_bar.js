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
  if (current >= total) {
    current = 0; // ustawiamy licznik na zero, aby pasek postępu zaczął się od początku
  }
  setTimeout(updateProgress, 100);
}

updateProgress();

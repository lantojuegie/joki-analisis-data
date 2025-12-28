document.getElementById("year").textContent = new Date().getFullYear();

const phone = "6281334373203";

document.getElementById("btnWA").addEventListener("click", function(){
  const judul = document.getElementById("judul").value || "-";
  const metode = document.getElementById("metode").value;
  const deadline = document.getElementById("deadline").value || "-";

  const message =
    "Halo, saya mau kirim data analisis.%0A%0A" +
    "Judul: " + judul + "%0A" +
    "Metode: " + metode + "%0A" +
    "Deadline: " + deadline + "%0A%0A" +
    "Saya siap kirim file data.";

  window.open("https://wa.me/" + phone + "?text=" + message, "_blank");
});

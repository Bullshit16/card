function showLove() {
  const extra = document.getElementById("extra");
  extra.classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bgmusic");
    audio.play().catch(error => console.log("Reproducción bloqueada:", error));
});
document.addEventListener("click", function () {
    let audio = document.getElementById("bgmusic");
    audio.play();
}, { once: true }); // Se ejecuta solo una vez

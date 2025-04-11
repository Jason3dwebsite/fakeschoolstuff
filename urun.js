// urun.js
document.addEventListener("keydown", function (e) {
  if (e.key == "~" && e.ctrlKey) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';
    document.body.appendChild(script);

    alert("Worked!");
  }
});

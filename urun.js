// urun.js
document.addEventListener("keydown", function (e) {
  if (e.key === "~" && e.ctrlKey) {
    (function () {
      var a = document.createElement('script');
      a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';
      document.body.appendChild(a);
    })();
  }
});

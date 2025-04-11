document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "`") {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';
    document.body.appendChild(script);
  }
});

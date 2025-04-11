document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "`") { // This is ~ when shift
    var a = document.createElement('script');
    a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';
    document.body.appendChild(a);
  }
});

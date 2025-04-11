document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
        // Directly execute the script without opening a popup
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js";
        document.body.appendChild(script);
    }
});

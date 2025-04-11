document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === "`") {
    console.log("Key detected!");
  }
});

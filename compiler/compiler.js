document.addEventListener("keydown", function(event) {
	var disp = document.getElementById("display");
        disp.textContent += String.fromCharCode(event.keyCode);
});

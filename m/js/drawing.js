var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here

		var my_gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		my_gradient.addColorStop(0, "black");
		my_gradient.addColorStop(1, "white");
		context.fillStyle = my_gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);
		$('#cont').css({"background":"url(" + canvas.toDataURL() + ")"});
    }
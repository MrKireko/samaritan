$(document).ready(function(){
	var inp = "What are your commands".split(" ");
	inp.push(inp[inp.length - 1])
	console.log(inp);
	function post() {
		var i = 0;
		var interval = setInterval(function(){
			$("#txt").css("color", "black");
			$("#txt").html(inp[i]);
			i = i+1;
			if (i == inp.length) {
				$("#txt").css("color", "rgba(0, 0, 0, 0)");
				setTimeout(function(){ $("#txt").html("---"); }, 500);
				clearInterval(interval);
			}
		}, 650);
	}
	setTimeout(function(){ post(); }, 10);
});
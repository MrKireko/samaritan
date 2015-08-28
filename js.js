$(document).ready(function(){
	var inp = "What are your commands ?".split(" ");
	var url = document.URL
	var i = 0;
	if (url.indexOf("?") > -1){
		var inp = url.replace("?", "_").replace("%20", "_").split("_");
		i = 1;
	}
	inp.push(inp[inp.length - 1])
	console.log(inp);
	function post() {
		var interval = setInterval(function(){
			$("#txt").css("color", "black");
			$("#txt").html(inp[i]);
			i = i+1;
			if (i == inp.length) {
				$("#txt").css("color", "rgba(0, 0, 0, 0)");
				setTimeout(function(){ $("#txt").html("---"); }, 500);
				clearInterval(interval);
			}
		}, 600);
	}
	setTimeout(function(){ post(); }, 10);
});
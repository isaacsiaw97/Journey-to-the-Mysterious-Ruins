var x = document.getElementById("puzzle4audio1"); 
x.volume = 0.2;

var validate = "" + getCookie("puzzle4guesses")
var guesses = validate.split(",");
var validate = ""
guesses.forEach(function(item){
	validate+="<li>"+item;
});
document.getElementById("answer4List").innerHTML = validate;

function validateAnswer() {
	var x="";
	x = document.getElementById("puzzle4answer").value;
	x = x.trimLeft();
	x = x.trimRight();

	if (x.toUpperCase()== "HALFLIFE"||x.toUpperCase()== "HALF-LIFE"||x.toUpperCase()== "HALF LIFE") {
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Correct!"+"<br>"+validate;
		document.cookie="puzzle4answer=HALF LIFE";
	}else if(guesses.includes(x.toUpperCase())==true){
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Try something else"+"<br>"+validate;
	}else{
		guesses.push(x.toUpperCase());
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		document.cookie="puzzle4guesses="+guesses;
	}
	document.getElementById("answer4List").innerHTML = validate;
}

function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
dragElement(document.getElementById("puzzle1Img1"));
dragElement(document.getElementById("puzzle1Img1"));
dragElement(document.getElementById("puzzle1Img2"));
dragElement(document.getElementById("puzzle1Img3"));
dragElement(document.getElementById("puzzle1Img4"));
dragElement(document.getElementById("puzzle1Img5"));
dragElement(document.getElementById("puzzle1Img6"));
dragElement(document.getElementById("puzzle1Img7"));
dragElement(document.getElementById("puzzle1Img8"));
dragElement(document.getElementById("puzzle1Img9"));
dragElement(document.getElementById("puzzle1Img10"));
dragElement(document.getElementById("puzzle1Img11"));
dragElement(document.getElementById("puzzle1Img12"));
dragElement(document.getElementById("puzzle1Img13"));
dragElement(document.getElementById("puzzle1Img14"));

var validate = "" + getCookie("puzzle1guesses")
var guesses = validate.split(",");
var validate = ""
guesses.forEach(function(item){
	validate+="<li>"+item;
});
document.getElementById("answer1List").innerHTML = validate;

function dragElement(elmnt) {//https://www.w3schools.com/howto/howto_js_draggable.asp
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function validateAnswer() {
	var x="";
	x = document.getElementById("puzzle1answer").value;
	x = x.trimLeft();
	x = x.trimRight();

	if (x.toUpperCase()== "SHROUD") {
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Correct!"+"<br>"+validate;
		document.cookie="puzzle1answer=SHROUD";
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
		document.cookie="puzzle1guesses="+guesses;
	}
	document.getElementById("answer1List").innerHTML = validate;
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
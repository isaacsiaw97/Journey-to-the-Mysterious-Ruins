if(getCookie("chapter1")=="true"){
	show(chapter1);
}
if(getCookie("puzzle1answer")=="SHROUD"){
	show(chapter2start);
	document.getElementById("answer1").innerHTML = getCookie("puzzle1answer");
}

if(getCookie("chapter2")=="true"){
	show(chapter2);
}
if(getCookie("puzzle2answer")=="ORCHID"){
	show(chapter3start);
	document.getElementById("answer2").innerHTML = getCookie("puzzle2answer");
}

if(getCookie("chapter3")=="true"){
	show(chapter3);
}
if(getCookie("puzzle3answer")=="CABBAGE"){
	show(chapter4start);
	document.getElementById("answer3").innerHTML = getCookie("puzzle3answer");
}

if(getCookie("chapter4")=="true"){
	show(chapter4);
}
if(getCookie("puzzle4answer")=="HALF LIFE"){
	show(chapter5start);
	document.getElementById("answer4").innerHTML = getCookie("puzzle4answer");
}
if(getCookie("chapter5")=="true"){
	show(chapter5);
}
if(getCookie("puzzle5answer")=="BOOK"){
	show(chapter6start);
	document.getElementById("answer5").innerHTML = getCookie("puzzle5answer");
}
if(getCookie("chapter6")=="true"){
	show(chapter6);
}
if(getCookie("puzzle6answer")=="NEVER JUDGE A BOOK BY ITS COVER"){
	show(chapter7start);
	document.getElementById("answer6").innerHTML = getCookie("puzzle6answer");
}
if(getCookie("chapter7")=="true"){
	show(chapter7);
}

function show(x) {
  x.classList.remove("hidden");
  x.classList.add("visible");
  x.scrollIntoView(false); 
}

function createCookie(cname){
	document.cookie=cname+"=true";
} 

function readCookies(){
	var x = document.cookie;
	console.log(x);
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

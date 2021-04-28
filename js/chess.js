dragPiece(document.getElementById("boardOneKingW"));
dragPiece(document.getElementById("boardOneQueenW"));
dragPiece(document.getElementById("boardOneBishopW"));
dragPiece(document.getElementById("boardOneRookW"));

dragPiece(document.getElementById("boardTwoKingW"));
dragPiece(document.getElementById("boardTwoQueenW"));
dragPiece(document.getElementById("boardTwoKnightW"));
dragPiece(document.getElementById("boardTwoRookW"));

dragPiece(document.getElementById("boardThreeKingW"));
dragPiece(document.getElementById("boardThreeBishopW"));
dragPiece(document.getElementById("boardThreeRookW"));

function dragPiece(piece) { //https://www.w3schools.com/howto/howto_js_draggable.asp
	var xPosA = 0, yPosA = 0, xPosB = 0, yPosB = 0, pieceLeft = piece.offsetLeft, pieceTop = piece.offsetTop;
	piece.onmousedown = mouseDown;

	function mouseDown(e){
		e = e || window.event;
		e.preventDefault();
		xPosB = e.pageX;
		yPosB = e.pageY;
		document.onmouseup = stopDrag;
		document.onmousemove = pieceDrag;
	}

	function pieceDrag(e){
		e = e || window.event;
		e.preventDefault();
		xPosA = xPosB - e.pageX;
		yPosA = yPosB - e.pageY;
		xPosB = e.pageX;
		yPosB = e.pageY;
		piece.style.top = (piece.offsetTop - yPosA) + "px";
		piece.style.left = (piece.offsetLeft - xPosA) + "px";
	}

	function stopDrag(e){
		e = e || window.event;
		e.preventDefault();
		if (piece.getAttribute("id") == "boardOneBishopW" && (e.pageX >= 200 && e.pageX <= 250) && (e.pageY >= 700 && e.pageY <= 750)){
			piece.style.left = 200 + "px";
			piece.style.top = 700 + "px";

			document.getElementById("rightOne").style.display="block";
			document.getElementById("rightOne").style.left = 200 + "px";
			document.getElementById("rightOne").style.top = 700 + "px";

		} else if (piece.getAttribute("id") == "boardTwoQueenW" && (e.pageX >= 600 && e.pageX <= 650) && (e.pageY >= 700 && e.pageY <= 750)){
			piece.style.left = 600 + "px";
			piece.style.top = 700 + "px";

			document.getElementById("rightTwo").style.display="block";
			document.getElementById("rightTwo").style.left = 600 + "px";
			document.getElementById("rightTwo").style.top = 700 + "px";

		} else if (piece.getAttribute("id") == "boardThreeRookW" && (e.pageX >= 1300 && e.pageX <= 1350) && (e.pageY >= 750 && e.pageY <= 800)){
			piece.style.left = 1300 + "px";
			piece.style.top = 750 + "px";

			document.getElementById("rightThree").style.display="block";
			document.getElementById("rightThree").style.left = 1300 + "px";
			document.getElementById("rightThree").style.top = 750 + "px";

		}else{
			piece.style.left = pieceLeft + "px";
			piece.style.top = pieceTop + "px";
			document.getElementById("wrong").style.display="block";
			document.getElementById("wrong").style.left = pieceLeft + "px";
			document.getElementById("wrong").style.top = pieceTop + "px";
			setTimeout(resetPos,500);
		}

		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function resetPos(){
	document.getElementById("wrong").style.left = "0px";
	document.getElementById("wrong").style.top = "0px";
	document.getElementById("wrong").style.display = "none";
}

function checkAnswer(){
	var input = document.getElementById("chessPuzzleAnswer").value;
	input = input.trimLeft();
	input = input.trimRight();

	if (input.toUpperCase()== "CABBAGE") {
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Correct!"+"<br>"+validate;
		document.cookie="puzzle3answer=CABBAGE";
	}else if(guesses.includes(input.toUpperCase())==true){
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Try something else"+"<br>"+validate;
	}else{
		guesses.push(input.toUpperCase());
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		document.cookie="puzzle3guesses="+guesses;
	}
	document.getElementById("answer3List").innerHTML = validate;
}
var validate = "" + getCookie("puzzle3guesses")
var guesses = validate.split(",");
var validate = ""
guesses.forEach(function(item){
	validate+="<li>"+item;
});
document.getElementById("answer3List").innerHTML = validate;

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
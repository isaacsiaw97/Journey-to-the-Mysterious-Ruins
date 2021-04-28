var playerGroup= null;
function init(){
	playerGroup=document.getElementById("player");				
	var position = playerGroup.getBoundingClientRect();
	playerGroup.style.left = Math.round(position.left)+"px";
	playerGroup.style.top = Math.round(position.top)+"px";
	rock=document.getElementById("key");
	var rockPosition = rock.getBoundingClientRect();
	rock.style.left = Math.round(rockPosition.left)+"px";
	rock.style.top = Math.round(rockPosition.top)+"px";
	door=document.getElementById("door");
	var doorPosition = door.getBoundingClientRect();
	door.style.left = Math.round(doorPosition.left)+"px";
	door.style.top = Math.round(doorPosition.top)+"px";
	wall=document.getElementsByClassName("obstacle");
	for(i = 0; i < wall.length; i++){
		var wallPosition = wall[i].getBoundingClientRect();
		wall[i].style.left = Math.round(wallPosition.left)+"px";
		wall[i].style.top = Math.round(wallPosition.top)+"px";
	}
	counter = 48;
	document.getElementById("movesRemaining").innerHTML = "Moves left: " + counter;
}
  
function getKeyAndMove(e){				
	var key_code=e.which||e.keyCode;
	switch(key_code){
		case 37: //left arrow key
			e.preventDefault();
			if(counter!=0){
				moveLeft();
				var collision = "false";
				for(i = 0; i < wall.length; i++){
					if((parseInt(rock.style.left)==(parseInt(wall[i].style.left)+50))&&(parseInt(rock.style.left)==parseInt(playerGroup.style.left))&&(rock.style.top==wall[i].style.top)&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";
					}else if((parseInt(playerGroup.style.left)==parseInt(wall[i].style.left))&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";		
					}
				}
				if(collision=="true"){
					moveRight();
					break;
				}
				if((playerGroup.style.left==rock.style.left)&&(playerGroup.style.top==rock.style.top)){					
					pushLeft();
				}
				minus();
				break;
			}
		case 38: //Up arrow key
			e.preventDefault();
			if(counter!=0){
				moveUp();
				var collision = "false";
				for(i = 0; i < wall.length; i++){
					if((parseInt(rock.style.top)==(parseInt(wall[i].style.top)+50))&&(parseInt(rock.style.top)==parseInt(playerGroup.style.top))&&(rock.style.left==wall[i].style.left)&&(playerGroup.style.left==wall[i].style.left)){
						var collision = "true";
						console.log("break");
					}else if((parseInt(playerGroup.style.left)==parseInt(wall[i].style.left))&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";						
					}
				}
				if(collision=="true"){
					moveDown();
					break;
				}
				if((playerGroup.style.left==rock.style.left)&&(playerGroup.style.top==rock.style.top)){					
					pushUp();
				}
				minus();
				break;
			}
		case 39: //right arrow key
			e.preventDefault();
			if(counter!=0){
				moveRight();
				var collision = "false";
				for(i = 0; i < wall.length; i++){
					if((parseInt(rock.style.left)==(parseInt(wall[i].style.left)-50))&&(parseInt(rock.style.left)==parseInt(playerGroup.style.left))&&(rock.style.top==wall[i].style.top)&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";
					}else if((parseInt(playerGroup.style.left)==parseInt(wall[i].style.left))&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";
						
					}
				}
				if(collision=="true"){
					moveLeft();
					break;
				}
				if((playerGroup.style.left==rock.style.left)&&(playerGroup.style.top==rock.style.top)){					
					pushRight();
				}
				minus();
				break;
			}
		case 40: //down arrow key
			e.preventDefault();
			if(counter!=0){
				moveDown();
				var collision = "false";
				for(i = 0; i < wall.length; i++){
					if((parseInt(rock.style.top)==(parseInt(wall[i].style.top)-50))&&(parseInt(rock.style.top)==parseInt(playerGroup.style.top))&&(rock.style.left==wall[i].style.left)&&(playerGroup.style.left==wall[i].style.left)){
						var collision = "true";
					}else if((parseInt(playerGroup.style.left)==parseInt(wall[i].style.left))&&(playerGroup.style.top==wall[i].style.top)){
						var collision = "true";
					}
				}
				if(collision=="true"){
					moveUp();
					break;
				}
				if((playerGroup.style.left==rock.style.left)&&(playerGroup.style.top==rock.style.top)){					
					pushDown();
				}
				minus();
				break;
			}				
	}
}
function minus(){
  counter -= 1;
  document.getElementById("movesRemaining").innerHTML = "Moves left: " + counter;
}
function moveLeft(){
	playerGroup.style.left=parseInt(playerGroup.style.left)-50 +'px';
}
function moveUp(){
	playerGroup.style.top=parseInt(playerGroup.style.top)-50 +'px';
}
function moveRight(){
	playerGroup.style.left=parseInt(playerGroup.style.left)+50 +'px';
}
function moveDown(){
	playerGroup.style.top=parseInt(playerGroup.style.top)+50 +'px';
}
function pushLeft(){
	rock.style.left=parseInt(rock.style.left)-50 +'px';
}
function pushUp(){
	rock.style.top=parseInt(rock.style.top)-50 +'px';
}
function pushRight(){
	rock.style.left=parseInt(rock.style.left)+50 +'px';
}
function pushDown(){
	rock.style.top=parseInt(rock.style.top)+50 +'px';
}

window.onload=init();

var validate = "" + getCookie("puzzle2guesses")
var guesses = validate.split(",");
var validate = ""
guesses.forEach(function(item){
	validate+="<li>"+item;
});
document.getElementById("answer2List").innerHTML = validate;

function validateAnswer() {
	var x="";
	x = document.getElementById("puzzle2answer").value;
	x = x.trimLeft();
	x = x.trimRight();

	if (x.toUpperCase()== "ORCHID") {
		var validate=""
		guesses.forEach(function(item){
			validate+="<li>"+item;
		});
		validate = "Correct!"+"<br>"+validate;
		document.cookie="puzzle2answer=ORCHID";
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
		document.cookie="puzzle2guesses="+guesses;
	}
	document.getElementById("answer2List").innerHTML = validate;
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

function reset(){
	location.reload(true); 
}
const onMouseMove = (e) =>{	//https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4
	search.style.left = e.pageX - 1250 + 'px';
	search.style.top = e.pageY - 1480 + 'px';
}

document.addEventListener('mousemove', onMouseMove);

function clicked(){
	document.getElementById("storyText").innerHTML = "The note the adventurers find reads: \"My dearest son, I am soon to leave this world. To you, I leave our family's treasured necklace. If you ever lose it, may it always find its way back to you. Much love, Mom.\" Looking around the room more, they find a painting of a royal-looking woman. One of the adventurers identifies the person in the painting as the previous queen, meaning that this letter is addressed to the king! The adventurers embark back home with the necklace and letter, to return it to its rightful owner."
	document.cookie="puzzle5answer=BOOK";
}	


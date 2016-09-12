var linkFlip = document.getElementById("c-button__pay");

var hoverEfect = linkFlip.parentElement;

linkFlip.addEventListener("click", function(){

	if(hoverEfect.className == "o-card"){
		hoverEfect.classList.add("o-card--hover");
	}else{
		hoverEfect.classList.remove("o-card--hover");
	}
});
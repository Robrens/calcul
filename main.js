var screen = document.getElementById('text');
var fButton = document.getElementsByClassName('button');
function calcul(){
	screen.value = this.value;
}

for (i=0; i< fButton.length; i++){
	fButton[i].addEventListener("click", calcul);
}
	



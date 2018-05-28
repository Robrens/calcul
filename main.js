var screen = document.getElementById('text');
var fButton = document.getElementsByClassName('button');
var  result = document.getElementById('equal');

for (i=0; i< fButton.length; i++){
    fButton[i].addEventListener("click", numbers);
}

function numbers(){
    screen.value += this.value;
}

result.addEventListener('click', calcul);
function calcul() {

    var azerty = eval(screen.value);
    screen.value = azerty;
}

function moveBlind(y){
    // On change la valeur de la variable --volet-position-top avec la valeur entrée en paramètre
    document.getElementsByClassName('img-volet')[0].style.setProperty('--volet-position-top', y+'px');
}

function getCursorPosition(value) {
    let y = null;

    // Si le curseur est à 0 ou 100, le volet a une autre forme donc il faut lui donner une hauteur très précise
    if(value == 100){
        y = -1084;
    }
    else if(value == 0){
        y = -1547;
    }
    else{
        // Calcul de la position à attribuer en fonction de la valeur du curseur (qui est entre 0 et 100)
        y = 4.5 * value - 450;
    }

    // Appel de la fonction qui déplace le volet
    moveBlind(y);    
}

// Initialise la valeur du curseur à 0 (volet totalement ouvert)
getCursorPosition(0);
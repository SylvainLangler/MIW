let tabDeviseConvert = {
    'euro': 1,
    'USD': 1.2693,
    'franc': 6.5596,
    'AUD': 1.4430
}

let tabDevises = ['euro', 'USD', 'franc', 'AUD'];

function convert(input){
    // On récupère la valeur entrée
    let inputValue = input.value;

    // Si ce qui est entré n'est pas un nombre
    if(isNaN(inputValue)){

        // Pour chaque devise
        for(let j = 0; j<tabDevises.length; j++){

            // On écrit un message d'érreur dans l'input
            document.getElementsByName("convert")[j].value = "Erreur, not a number";
        }
    }
    else{
        // Tableau contenant l'index des inputs qu'il faudra changer, par exemple [0, 1, 2], car tous mes inputs ont comme attribut name "convert"
        let inputsToChange = [];

        // On récupère le libellé de la devise entrée
        let devise = input.id;

        // Pour chaque devise du tableau associatif
        for(let deviseTab in tabDeviseConvert){

            // Si celle-ci est différente de la devise entrée par l'utilisateur
            if(deviseTab != devise){

                // On stocke son index dans un tableau
                inputsToChange.push(tabDevises.indexOf(deviseTab));
                
            }
        }

        // Pour chaque input 
        for(let i = 0; i<tabDevises.length; i++){

            // Si le tableau contient l'index i
            if(inputsToChange.includes(i)){
                
                // Si on est sur le case de l'euro
                if(i == 0){
                    // On divise la valeur entrée par ce que vaut un euro dans cette devise
                    document.getElementById('euro').value = (inputValue / tabDeviseConvert[input.id]).toFixed(4);
                }
                else{
                // On affiche le montant dans l'input: on convertit en euro puis on multiplie par la devise correspondante 
                document.getElementsByName("convert")[i].value = ((inputValue / tabDeviseConvert[input.id])*tabDeviseConvert[tabDevises[i]]).toFixed(4);
                }
            }
        }
    }
}

// Désolé pour la clarté du code, je ne sais pas si on pouvait faire moins compliqué
// De plus, je ne sais pas si cela est judicieux d'avoir deux tableaux, cela pourrait provoquer des confusions


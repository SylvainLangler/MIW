// Regex ISBN-13
let Reg = {
    isbn: /(978|979)-\d-\d{5}-\d{3}-\d/
}

// Vérifie la conformité du numéro entré
function conformeISBN(n){
    return (Reg.isbn.test(n));
}

// Vérifie la validité du numéro entré
function valideISBN(n){
    // on récupère les 12 premiers nombres en supprimant les tirets
    let first13numbers = n.substring(0,15).replace(/-/g, '');

    // On créé un tableau à partir de la string
    let tabNumber = [];

    // Il y avait sûrement d'autres moyen de créer un tableau
    tabNumber = Array.from(first13numbers);

    let total = 0;

    // Pour chaque élément du tableau, on le transforme en un entier et on effectue les calculs
    for(let i=0; i<tabNumber.length; i++){

        tabNumber[i] = parseInt(tabNumber[i]);

        // Traduction de "Les multiplier successivement par 1 et par 3"
        if(i % 2 != 0){
            tabNumber[i] *= 3;
        }

        total += tabNumber[i];
    }

    total += parseInt(n.substring(16));

    if(total % 10 == 0){
        return true;
    }
    else{
        return false;
    }
}

// Fonction test appelée lors du click sur le bouton OK, qui renvoit un message différent selon le numéro entré
function test(form){

    // On récupère la valeur entrée par l'utilisateur
    let entree = form.isbn.value;

    let reponse = "";

    // Si l'utilisateur n'a rien entré
    if(entree == ""){
        reponse = "Saisir un numéro ISBN";
    }
    else{
        // Si l'entrée n'est pas conforme
        if(!conformeISBN(entree)){
            reponse = "ISBN non conforme";
        }
        else{
            // Si l'entrée n'est valide
            if(!valideISBN(entree)){
                reponse = "ISBN non valide";
            }
            else{
                reponse = "ISBN valide";
            }
        }
    }

    // On affiche dans la div réponse, le message à montrer
    document.getElementById("reponse").innerHTML = reponse;
    
}
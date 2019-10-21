var pDebut = new Tpersonne("sylvain");

function liste(){
    document.getElementById("liste").innerHTML = "";
    let s = pDebut;
    while(s != null){
        document.getElementById("liste").innerHTML += s.nom + '<br />';
        s = s.pSuivant;
    }
}

function ajout(){
    let nom = prompt("Nom");
    let newTpersonne = new Tpersonne(nom);
    newTpersonne.pSuivant = pDebut;
    pDebut = newTpersonne;
    liste();
}

function supprimer(){
    let done = false;
    let nom = prompt("Nom");
    let s = pDebut;
    p = null;
    while(s != null && nom != s.nom){
        p = s;
        s = s.pSuivant;
    }

    if(s.nom == nom){
        if(s == pDebut){
            pDebut = s.pSuivant;
        }
        else{
            p.pSuivant = s.pSuivant;
        }
        s = null;
        done = true;
    }
    liste();
    alert(done);
}

function init(){
    pDebut = null;
    liste();
    alert("Liste réinitialisée");
}
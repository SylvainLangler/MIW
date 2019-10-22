var pDebut = null;

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
    if(nom.length < 2 || nom.length > 20){
        alert("Saisie invalide");
    }
    else{
        nom = nom.substr(0,1).toUpperCase()+nom.substr(1);
        let newTpersonne = new Tpersonne(nom);
        newTpersonne.pSuivant = pDebut;
        pDebut = newTpersonne;
        liste();
    }
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
    if(s != null && s.nom == nom){
        if(s == pDebut){
            pDebut = s.pSuivant;
        }
        else{
            p.pSuivant = s.pSuivant;
        }
        delete(s);
        done = true;
    }
    liste();
    if(done){
        alert("Supression réalisée avec succès");
    }
    else{
        alert("Supression impossible");
    }
}

function init(){
    pDebut = null;
    liste();
    alert("Liste réinitialisée");
}
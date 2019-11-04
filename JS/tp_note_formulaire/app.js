let tabProd = {'PC': 1000, 'Imprimante': 80, 'Moniteur': 150, 'Cable': 20, 'Souris': 40, 'Clavier': 50};

window.onload = remplirSelect(tabProd);

/**
 * 
 * @param tabProd 
 * Fonction permettant de remplir les balises select du formulaire HTML en fonction du tableau tabProd
 * 
 */
function remplirSelect(tabProd){
    let ch = '<option value="">Choisir</option>';
    for(let produit in tabProd){
        ch += '<option value="'+produit+'">'+produit+'</option>';
    }
    for(let i=0; i<3; i++){
        document.getElementsByName("produit")[i].innerHTML = ch;
    }
}

function affLigne(n){
    // Si l'option choisie dans la liste déroulante est différente de celle de base ("choisir"),
    // on affiche le prix et la quantité est initialisée à 1;
    if(document.getElementsByName("produit")[n].value != ""){
        document.getElementsByName("prix")[n].value = tabProd[document.getElementsByName("produit")[n].value];
        document.getElementsByName("quantite")[n].value = 1;
    }
    else{
        document.getElementsByName("prix")[n].value = null;
        document.getElementsByName("quantite")[n].value = null;
    }

    affMontant();
}

function plus(n){
    document.getElementsByName("quantite")[n].value = parseInt(document.getElementsByName("quantite")[n].value)+1;
    affMontant();
}

function moins(n){
    let quantite = parseInt(document.getElementsByName("quantite")[n].value);
    if(quantite > 1){
        document.getElementsByName("quantite")[n].value = parseInt(document.getElementsByName("quantite")[n].value) -1;
        affMontant();
    }
}

function sup(n){
    document.getElementsByName("produit")[n].value = ""
    document.getElementsByName("prix")[n].value = null;  
    document.getElementsByName("quantite")[n].value = null;  
    affMontant();
}

function affMontant(){
    let montantHT = 0;
    let montantTVA = 0;
    for(let i =0; i<3; i++){
        if(document.getElementsByName("produit")[i].value != ""){
            montantHT += (parseInt(document.getElementsByName("prix")[i].value)) * (parseInt(document.getElementsByName("quantite")[i].value));
            montantTVA += (parseInt(document.getElementsByName("prix")[i].value) * 0.2) * (parseInt(document.getElementsByName("quantite")[i].value));
        }
    }
    document.getElementById('montant-ht').value = montantHT;
    document.getElementById('montant-tva').value = montantTVA;
    document.getElementById('montant-ttc').value = montantHT + montantTVA;
}

function validationCmd(){
     // ajouter les onclick
}

function reset(){
    // ajouter les onclick
}
// Tableau associatif au lieu de deux tableaux car d'un point de vue conception c'est étrange d'avoir un tableau 
// uniquement rempli de produits et un de prix. On ne sait pas quel prix correspond à quel produit, ce n'est pas clair.
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
    // On parcourt les trois produits
    for(let i =0; i<3; i++){
        // Si il y a bien un produit choisi on effectue les calculs
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
    let ch = "";
    ch = ch + verifFormRempli() + verifCodePostal() + verifNumTel() + verifEmail();
    if(ch != ""){
        alert(ch);
    }
    else{
        alert("Formulaire correct");
    }
}

function verifFormRempli(){
    let ch = "";
    // pour chaque élément du formulaire, s'il est vide alors on l'indique
    for(let i = 0; i<document.form.length; i++){
        if(document.form.elements[i].value == ""){
            ch += document.form.elements[i].name+" non rempli\n";
        }
    }
    return ch;
}

function verifNumTel(){
    let ch = "";
    let reg = /^(\d{2}[ -.]?){5}$/;
    // si le numéro de téléphone n'est pas vide et qu'il ne passe pas le test de la regex, alors on indique l'erreur
    if(document.getElementById("tel").value != "" && !reg.test(document.getElementById("tel").value)){
        ch += "Numéro de téléphone invalide\n";
    }
    return ch;
}

function verifCodePostal(){
    let ch = "";
    // regex récupérée sur internet, spécifique à la France
    let reg = /^(?:[0-8]\d|9[0-8])\d{3}$/;
    // si le code postal n'est pas vide et qu'il ne passe pas le test de la regex, alors on indique l'erreur
    if(document.getElementById("codepostal").value != "" && !reg.test(document.getElementById("codepostal").value)){
        ch += "Code postal invalide\n";
    }
    return ch;
}

function verifEmail(){
    let ch = ""
    let reg=new RegExp("^[a-z0-9._-]+@[a-z0-9-_]+\.[a-z0-9]{2,4}$","i");
    // si le mail n'est pas vide et qu'il ne passe pas le test de la regex, alors on indique l'erreur
    if(document.getElementById("mail").value != "" && !reg.test(document.getElementById('mail').value)){
        ch += "Email invalide"
    }
    return ch;
}

function resetForm(){
    // Tableau qui contient les inputs qu'il ne faut pas vider lors du reset
    let tabInputNePasVider = ['p1-plus','p1-moins','p1-reset','p2-plus','p2-moins','p2-reset','p3-plus','p3-moins','p3-reset', 'sub', 'reset'];
    // pour chaque input, si son nom n'est pas dans le tableau (le if retourne -1), alors on remet à vide la value de l'input
    for(let i = 0; i<document.form.length; i++){
        if((tabInputNePasVider.indexOf(document.form.elements[i].name)) == -1){
            document.form.elements[i].value = "";
        }
    }
}
function exercice2(){
    let nombre = prompt("Saisir un nombre");
    alert(pair(nombre));
}

function exercice3(){
    let a = parseInt(prompt("entrez un nombre", 20));
    let b = parseInt(prompt("entrez un nombre", 10));
    let c = parseInt(prompt("entrez un nombre", 30));
    let tab = [a,b,c];

    alert("Somme: "+(a+b+c)+"\nMoyenne: "+((a+b+c)/3)+"\nMax: "+Math.max(a,b,c)+"\nMin: "+Math.min(a,b,c)+"\nOrdre croissant: "+tab.sort().join(','));
}

function exercice4(){
    let nb = parseInt(prompt("Entrez un nombre"));
    if(!isNaN(nb)){
        alert(nb*(nb+1)/2);
    }
    else{
        alert("saisie invalide");
    }
}

function exercice5(){
    let type = prompt("Type de surface à calculer");
    switch(type){
        case 'carré':
            let c = parseFloat(prompt("longueur d'un côté"));
            alert(surfCarre(c));
            break;
        case 'rectangle':
            let longueur = parseFloat(prompt("longueur"));
            let largeur = parseFloat(prompt("largeur"));
            alert(surfRectangle(longueur,largeur));
            break;
        case 'cercle':
            let rayon = parseFloat(prompt("Rayon"));
            alert(surfCercle(rayon));
            break;
        default:
            alert("Type de surface invalide");
    }
}

function exercice6(){
    let pswd = "toto";
    if(prompt("mot de passe") == "toto"){
        exercice4();
    }
    else{
        window.location.reload();
    }
}

function exercice7(){
    for(let i = 1; i<=50; i++){
        console.log(i*i);
    }
    alert("voir console");
}

function exercice8(){
    let N1 = parseInt(prompt("Valeur 1"));
    let N2 = parseInt(prompt("Valeur 2"));
    let str = '';
    str += "</tr>";

    if(N1 < N2){
        for(let i = N1+1; i<N2; i++){
            if(pair(i)){
                str += '<td>'+i+'</td>';
            }
        }
    }
    else{
        alert(N1+" > "+N2+" -> Invalide");
    }
    str += "</tr>";
    document.getElementById('table').innerHTML += str;
}

function exercice9(){
    let nb = parseInt(prompt("Entrez un nombre entre 2 et 9"));
    let str = "";
    if(2<=nb<=9){
        for(let i=1; i<=10; i++){
            str += "<tr><td>"+i+" x "+nb+" = "+i*nb+"</td></tr>";
        }
    }
    else{
        alert("saisie invalide");
    }
    document.getElementById('multiplication').innerHTML += str;
}

function exercice11(){
    let prenom = prompt("Prénom");
    
    let nom = prompt("Nom");

    let date = prompt("Date au format JJ/MM/AAAA");

    let regNom = /[a-zA-Z]+/g;

    let regDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g;

    let tabJourNum = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

    if(date.match(regDate) &&  prenom.match(regNom) && nom.match(regNom)){

        let dateEN = date.split("/")[1]+'/'+date.split("/")[0]+'/'+date.split("/")[2];

        let newDate = new Date(dateEN);

        let numJour = newDate.getDay();
        
        alert(prenom+" - "+nom+" - "+tabJourNum[numJour]);
    }
    else{
        alert("Erreur de saisie");
    }
}


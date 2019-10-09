function exercice1(){
    alert("Bienvenue dans mon site"); 
}

/*window.onload = function(){
    exercice2();
}*/

function exercice2(){
    alert("bonjour");
}

function exercice3(){
    let choix = window.confirm("Voulez-vous continuer?");
    if(choix){
        alert("Choix: Ok")
    }
    else{
        alert("Choix: Annuler")
    }
}

function exercice4(){
    let date = document.lastModified.split("/");
    // alert("Date dernière mise à jour: "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" URL de la page: "+window.location.href);
    
    alert("Date dernière mise à jour: "+date[1]+'/'+date[0]+'/'+date[2].split(' ')[0]+"\nURL de la page: "+window.location.href);
    //on peut aussi utiliser substring
}

function exercice5(){
    let reponse = prompt("Saisir nom et prénom");
    if(reponse){
        alert("Bonjour "+reponse.split(' ')[0].toUpperCase()+" "+reponse.split(' ')[1].substr(0,1).toUpperCase()+reponse.split(' ')[1].substr(1).toLowerCase());
    }
}

function mouseOver(element){
    element.style.width = "200px";  
}

function mouseOut(element){
    element.style.width = "250px";
}

function exercice7(){
    let string = "Nom du navigateur: "+navigator.appCodeName+"\nVersion: "+navigator.appVersion.split(' ')[0]+"\nLangage: "+navigator.language+"\nSystème: "+navigator.platform;
    alert(string);
}

function exercice8(){
    let string = prompt("Saisir un nom et prénom");
    if(string){
        string = string.split(' ');
        alert("Nombre de caractères dans le nom: "+string[0].length+"\nNombre de caractères dans le prénom: "+string[1].length+"\n Trois premiers caractères du nom: "+string[0].substr(0,3 )+"\n Trois premiers caractères du prenom: "+string[1].substr(0,3));
    }
}

function exercice9(){
    let nb1 = prompt("nombre 1");
    let nb2 = prompt("nombre 2");
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    let somme = nb1+nb2;

    let max = Math.max(nb1,nb2);

    if(nb1 && nb2){
        alert("N1+N2= "+somme+"\nValeur maximale= "+max+"\n"+Math.ceil(nb1)+">="+nb1+"\n"+Math.floor(nb2)+"<="+nb2);
    }
}

function getTime(){
    let date = new Date();
    let string = +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    //console.log(document.getElementsByClassName("horloge"));

    document.getElementById("horloge").innerHTML = string;
}

function exercice10(){
    setInterval(getTime, 1000);
}

function exercice11(){
    let string = prompt("mots séparés par _");
    alert(string.replace(/_/gi,"/"));
}
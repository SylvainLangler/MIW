function permutation(a, b){
    let temp = a;
    a = b;
    b = temp;
    console.log("a = "+a+" et b = "+b);
}

function testPermutation(){
    permutation(1,2);
}

function factorielle(n){

    if(n==0){
        return 1;
    }
    else{
        return n * factorielle(n-1);
    }
}

function capitalise(capital, taux, nbAnnees){
    for(let i=0; i<nbAnnees; i++){
        capital = capital + capital * (taux/100);
    }
    return capital;
}


// PAS BON
/*function capitaliseRecursive(capital, taux, nbAnnes){
    if(nbAnnes){
        return capital;
    }
    return capital + capitalise(capital, (nbAnnes -1)*(1+taux/100));
}*/

function doubleCapital(capital, taux){
    let capitalDouble = capital * 2;
    let nbAnnees = 0;
    while (capital < capitalDouble){
        capital = capital + capital * (taux/100);
        nbAnnees ++;
    }
    return nbAnnees;
}


/* ) Ecrire la fonction estPremier([E] n: entier ):booléen
Cette fonction retourne vrai si n est un nombre premier
Un nombre est premier s'il ne possède que 2 diviseurs.
Pour décider si un nombre est premier, il suffit de le diviser par tous les nombres
inférieurs à sa racine carrée : s'il est divisible par l'un d'entre eux, il est composé, et
sinon, il est premier */

function estPremier(nombre){
    let premier = false;

    if(nombre == 2){
        return true;
    }

    for(let i = nombre-1; i>=Math.floor(Math.sqrt(nombre)) && i>1; i--){
        /*console.log("i: "+i);
        console.log("resultat: "+nombre % i);*/
        if(nombre % i == 0){
            return false;
        }
        else{
            premier = true;
        }
    }

    return premier;
}

// MARCHE PAS
/*function estPremier2(nombre){
    if(nombre<2){
        return false;
    }

    let i = 2

    while(i<Math.round(Math.sqrt(nombre) && nombre % i !=0)){
        i+=1;
    }

    return nombre % i !=0;
}*/



/* 8°) Ecrire la procédure premier ([E] n : entier [S] t[ ]: tableau d'entiers)
Cette procédure détermine les nombres premiers compris entre 1 et n et les enregistre
dans le tableau t */


function premier(nombre){
    let tab = [];
    for(let i=1; i<=nombre; i++){
        if(estPremier(i)){
            tab.push(i);
        }
        
    }
    return tab;
}

/* 9°) Ecrire la procédure pyramide ( [E] n: entier )
Cette procédure affiche une pyramide de nombres.
 On suppose que la fonction str(i) transforme le nombre i en caractère "i" et que chr(13)
permet un saut de ligne
Exemple pour N=5
        1
       121
      12321
     1234321
    123454321
*/

// MARCHE PAS

/* function pyramide(nombre){
    let string = "";
    for(let i=1; i<=nombre; i++){
        for(let j=1; j<=nombre-i;j++){
            string += " ";
        }
        for(let k=1; k<=i;k++){
            string += k;
        }
        for(let l= nombre-1; l>=1; l--){
            string += l;
        }
        string += "\n";
    }
    console.log(string);
}*/


function recherche(tab, nom){
    let i = 0;
    let trouve = false;
    while(tab[i][0] != nom && tab[i][0] != "fin"){
        if(tab[i][0] == nom){
            return true;
        }
        i++;
    }
    return trouve;
}

function test(){
   let tab = [
    ["Paul", 20],
    ["Pierre",10],
    ["Jean", 15],
    ["fin"]
   ]
   let nom = "Jean";
   console.log(recherche(tab, nom));
}


function nombre(ch){
    let reg = /^[+-]?(([0-9]+[.]?[0-9]*)|([0-9]*[.]?[0-9]+))/g;

    return(reg.test(ch));
}

function entierPositif(nombre){

    let reg = /^\+?[0-9]+$/g;

    return(reg.test(nombre));
}

function pair(value){
    return((!isNaN(value)) && value%2 == 0);
}

function arrondi(value, n){
    if(!isNaN(value) && !isNaN(n)){
        return(Number(Math.round(value+'e'+n)+'e-'+n));
    }
    else{
        return false;
    }
}

function nbOccurences(c, chaine){
    let compteur = 0;
    for(let i = 0; i<chaine.length; i++){
        if(chaine[i] == c){
            compteur++;
        }
    }
    return compteur;
}

function substitue(c1, c2, chaine){
    for(let i = 0; i<chaine.length; i++){
        if(chaine[i] == c1){
            chaine = chaine.replace(chaine[i],c2);
        }
    }
    return chaine;
    /* ou
    return chaine.split(c1).join(c2);
    */
}

function surfCarre(c){
    return c*c;
}

function surfRectangle(c,l){
    return c*l;
}

function surfCercle(r){
    return (r*r)*Math.PI;
}

function maxi(){
    let max = null;
    if(arguments.length == 0){
        throw new Error("Function maxi() called without arguments")
    }
    for(let i= 0; i<arguments.length; i++){
        if(nombre(arguments[i])){
            if(arguments[i] > max){
                max = arguments[i];
            }
        }
        else{
            throw new Error("One of the arguments is not a number");
        }
    }
    return max;
}

Number.prototype.estNombreEntier = 
    function(){
        return /^[+]?\d+$/.test(this);
    }
;

String.prototype.substitue = 
    function(c1,c2){
        return this.split(c1).join(c2);
    }
;
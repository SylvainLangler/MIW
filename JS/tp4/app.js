// Premier exemple 

Object.prototype.each = function(f){
    for(i in this){
        if(this.hasOwnProperty(i)){
            f(i, this[i]);
        }
    }
}

let tabtest = {"nom":"Dupont", "prenom":"Pierre"};

tabtest.each(function(a,b){
    //console.log(b);
});


/*function Personne(n,p){
    this.nom = n;
    this.prenom = p;
}

console.log(Personne.prototype);*/




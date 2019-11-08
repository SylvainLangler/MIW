String.prototype.extend({
    left: left,
    right: right,
    capitalize: capitalize,
    trim: trim
});

// Exemples: 

/*

let test = "Bonjour Peterson";
console.log(test.left(2));
console.log(test.right(2));
console.log(test.capitalize());
console.log(test.trim());

*/

function left(n){
    if(this.length >= n){
        return this.substr(0,n);
    }
    else{
        throw new Error(n+" est supérieur à la longueur de la chaine");
    }
}

function right(n){
    if(this.length >= n){
        let fin = this.length;
        return this.substr(n,fin);
    }
    else{
        throw new Error(n+" est supérieur à la longueur de la chaine");
    }
}

function capitalize(){
    let newString = this.substr(0,1).toUpperCase()+this.substr(1).toLowerCase();
    return newString;
}

function trim(){
    let newString = "";
    let i = 0;
    let j = this.length;
    while(this[i] == ' '){
        i++;
    }
    while(this[j] == ' '){
        j--;
    }
    newString = this.substr(i, j);
    
    return newString;
}
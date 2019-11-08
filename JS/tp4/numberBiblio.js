Number.prototype.extend({
    pow: pow
});

// Exemple 

/*

let a = 5;
console.log(a.pow(2));

*/

function pow(n){
    return Math.pow(this,n);
}
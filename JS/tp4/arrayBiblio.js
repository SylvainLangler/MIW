Array.prototype.extend({
    merge: merge
});

// Exemples: 

/*

let tab = ['Sylvain', 'Langler'];
let tab2 = ['Peterson'];
console.log(tab.merge(tab2));

*/

function merge(tab){
    for(let i=0; i<tab.length; i++){
        this.push(tab[i]);
    }
    return this;
}
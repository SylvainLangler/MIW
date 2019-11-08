Node.prototype.extend({
    changedId: changeId,
    css: css
});

// Exemples

/*

document.getElementById("test").changedId("oui");

document.getElementById("test").css({"height":"60px"});

*/

function changeId(val){
    this.id = val;
}

function css(obj){
    for(let i in obj){
        this.style[i] = obj[i];
    }
}


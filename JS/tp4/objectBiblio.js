Object.prototype.extend = function(obj){
    for(let i in obj){
        this[i] = obj[i];
    }
}
var md3 = function(nb) {
    return nb%3 === 0;
}

var surface = function(obj){
    if((typeof(obj) == 'object')){
        if(obj['forme'] === 'carre'){
            if(obj['cote']!= null && !isNaN(obj['cote'])){
                return obj['cote']*obj['cote'];
            }
        }
        if(obj['forme'] === 'rectangle'){
            if(obj['longueur']!= null && obj['largeur']!= null && !isNaN(obj['longueur'] && !isNaN(obj['largeur']))){
                return obj['longueur']*obj['largeur'];
            }
        }
        if(obj['forme'] === 'cercle'){
            if(obj['rayon']!= null && !isNaN(obj['rayon'])){
                return (Math.PI * (obj['rayon']*obj['rayon'])).toFixed(2);
            }
        }
        return -1;
    }
    return -1;
}
temp = [
    {
        ville : "Gap",
        max : 38,
        min : -10,
        moy: 18
    },
    {
        ville : "Nice",
        max : 40,
        min : -1,
        moy: 20
    }
]

window.onload = remplirSelect(temp);

function remplirSelect(temp){

    let ch = '<option value="">Choisir</option>';
    // Pour chaque objet, on créé une option avec comme valeur la ville
    for(let indexObjet in temp){
        ch += '<option value="'+temp[indexObjet].ville+'">'+temp[indexObjet].ville+'</option>';
    }
    
    // On ajoute la chaine de caractère créé à l'intérieur du select
    document.getElementsByName("ville")[0].innerHTML = ch;
    
}

function afficheInfos(){

    // On récupère la ville demandée
    let valueVille = document.getElementById('ville').value;

    // Si la ville est bien une des options proposées et non "choisir"
    if(valueVille != ""){
        // pour chaque objet, si la ville demandée correspond avec la ville de l'objet, alors on affiche les informations
        for(let indexObjet in temp){
            if(temp[indexObjet].ville == valueVille){
                document.getElementById('tmax').value = temp[indexObjet].max;
                document.getElementById('tmin').value = temp[indexObjet].min;
                document.getElementById('tmoy').value = temp[indexObjet].moy;
            }
        }
    }
    // Sinon, on remet les valeurs des inputs à vide
    else{
        document.getElementById('tmax').value = "";
        document.getElementById('tmin').value = "";
        document.getElementById('tmoy').value = "";
    }

}
function nombre(){
    let reg = /^[+-]?(([0-9]+[.]?[0-9]*)|([0-9]*[.]?[0-9]+))/g;

    let ch = prompt("Insérez un nombre");

    alert(reg.test(ch)?"C'est un nombre":"Ceci n'est pas un nombre");
}

function entierPositif(){
    /*let value = parseFloat(prompt("insérez un nombre"));
    console.log(value);
    alert((!isNaN(value)) && value >= 0 && value%value==0);*/

    let reg = /^\+?[0-9]+$/g;

    let ch = prompt("Insérez un nombre");

    alert(reg.test(ch)?"C'est un nombre entier positif":"Ceci n'est pas un nombre entier positif");
}

function pair(){
    let value = parseInt(prompt("Insérez un nombre"));
    alert((!isNaN(value)) && value%2 == 0);
}

function arrondi(){
    let value = eval(prompt("Insérez un nombre  à arrondir"));
    let n = eval(prompt("n chiffres après la virgule"));
    if(!isNaN(value) && !isNaN(n)){
        alert(Number(Math.round(value+'e'+n)+'e-'+n));
    }
    else{
        alert("can't round");
    }
}
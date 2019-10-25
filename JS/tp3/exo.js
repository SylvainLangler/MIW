let form1 = document.forms['form1'];

function raz(){
    
    document.getElementById("1").value="YES"
    form1.elements["text1"].value = "";
}

function longueur(){
    var longueur = (document.forms['form1'].elements["textarea"].value).split("\n").join('').length;
    form1.elements['text1'].value = longueur;
}

let form2 = document.forms['form2'];

function validate(){
   for(let i = 0; i<form2.elements.length-2; i++){
       if(form2.elements[i].value == ' '){
           alert("un des champs n'est pas rempli"+form2.elements[i].value);
           return false;
       }
   }
   let reg = new RegExp("^[a-z0-9._-]*@[a-z]*.[a-z]{2,3}","gi");
   if(!(form2.elements['email'].value).match(reg)){
       alert("Mail invalide");
       return false;
   }
}

let form3 = document.forms['form3'];

function convertToFrancs(){
    if(nombre(form3.elements['euros'].value)){
        form3.elements['francs'].value = form3.elements['euros'].value * 6.55;
    }
    else{
        alert("Impossible de convertir "+form3.elements['euros'].value);

    }
}

function convertToEuros(){
    if(nombre(form3.elements['francs'].value)){
        form3.elements['euros'].value = form3.elements['francs'].value / 6.55;
    }
    else{
        alert("Impossible de convertir "+form3.elements['francs'].value);
    }
}

function toggleColor(element){
    element.classList.toggle("hover-blue");
}

/*var tab = [];
while((a=prompt("test"))){
    tab.push(a);
}*/

console.log(tab);
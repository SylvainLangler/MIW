let tabMails = ['leo@orange.fr','lina@hotmail.fr','bernard@orange.fr','kirl@gmail.com'];

//let hebergeur = prompt("entrez l'hebergeur");

let stringMails = tabMails.toString();

var reg = new RegExp("^[a-z0-9._-]*@[a-z]*.[a-z]{2,3}","gi");
//
tabMatchedMail = stringMails.match(reg);

//console.log(tabMatchedMail);


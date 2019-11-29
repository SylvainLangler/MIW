let temp = [{"mois":"Janvier","tp":[2,1,5,2,10,-10,11,2,1,0,5,2,2,10,5,2,2,0,-2,1,2,0,5,-8,0,5,2,2,10,5,2]},
{"mois":"Février","tp":[2,0,5,2,10,10,5,-2,-2,10,5,2,2,8,5,10,12,10,5,10,10,10,11,8,10,5,10,10]},
{"mois":"Mars","tp":[2,1,5,1,12,10,5,1,12,10,5,1,2,10,1,1,12,10,15,12,12,10,15,12,10,15,12,12,10,15,12]},
{"mois":"Avril","tp":[1,1,5,1,10,10,9,12,9,10,9,12,2,10,15,12,12,10,15,12,12,10,15,12,10,15,12,12,10,15]},
{"mois":"Mai","tp":[12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,10,15,12,12,10,15,12]},
{"mois":"Juin","tp":[12,10,25,12,22,20,15,12,12,10,15,12,12,10,25,12,22,20,25,12,22,22,15,12,10,15,12,12,10,15]},
{"mois":"Juillet","tp":[22,30,25,22,22,30,25,22,22,30,35,32,32,30,25,22,22,30,25,22,22,30,25,22,30,25,32,32,20,25,22]},
{"mois":"Aout","tp":[23,31,26,23,23,29,24,21,21,31,31,30,30,30,24,22,23,30,28,22,22,30,28,22,31,25,30,28,20,28,22]},
{"mois":"Septembre","tp":[22,30,25,22,22,30,25,22,22,30,35,32,32,30,25,22,22,30,25,22,22,30,25,22,30,25,32,32,20,25]},
{"mois":"Octobre","tp":[12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,10,15,12,12,10,15,12]},
{"mois":"Novembre","tp":[12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,12,10,15,12,10,15,12,12,10,15]},
{"mois":"Décembre","tp":[12,10,12,10,12,10,12,10,10,8,12,8,12,8,9,13,12,13,14,12,10,8,10,9,10,9,8,9,10,8,12]}];

// <table border="1">
let table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('style', 'text-align:center');

// Ajout des éléments statiques du tableau
let tr = document.createElement('tr');

// <th>Mois</th>
let th_mois = document.createElement('th');
th_mois.setAttribute('style','width: 70px');
let th_mois_txt = document.createTextNode('Mois');
th_mois.appendChild(th_mois_txt);

// <th>Minimum</th>
let th_min = document.createElement('th');
th_min.setAttribute('style','width: 70px');
let th_min_txt = document.createTextNode('Minimum');
th_min.appendChild(th_min_txt);

// <th>Maximum</th>
let th_max = document.createElement('th');
th_max.setAttribute('style','width: 70px');
let th_max_txt = document.createTextNode('Maximum');
th_max.appendChild(th_max_txt);

// <th>Moyenne</th>
let th_moy = document.createElement('th');
th_moy.setAttribute('style','width: 70px');
let th_moy_txt = document.createTextNode('Moyenne');
th_moy.appendChild(th_moy_txt);

// <tr> .... </tr>
tr.appendChild(th_mois);
tr.appendChild(th_min);
tr.appendChild(th_max);
tr.appendChild(th_moy);

// <table> <tr> .... </tr> </table>
table.appendChild(tr);

for(let index in temp){

    if(temp.hasOwnProperty(index)){
        // <tr> </tr>
        let tr_ligne = document.createElement('tr');
        tr_ligne.setAttribute('style', 'background-color: #687368; color:white;');

        // <td> {{ mois }} </td>
        let td_mois = document.createElement('td');
        let td_mois_txt = document.createTextNode(temp[index]['mois']);
        td_mois.appendChild(td_mois_txt);

        // <td> {{ minimum }} </td>
        let td_min = document.createElement('td');
        let td_min_txt = document.createTextNode(temp[index]['tp'].min());
        td_min.appendChild(td_min_txt);

        // <td> {{ maximum }} </td>
        let td_max = document.createElement('td');
        let td_max_txt = document.createTextNode(temp[index]['tp'].max());
        td_max.appendChild(td_max_txt);

        // <td> {{ moyenne }} </td>
        let td_moy = document.createElement('td');
        let td_moy_txt = document.createTextNode(temp[index]['tp'].avg());
        td_moy.appendChild(td_moy_txt);

        // <tr> .... </tr>
        tr_ligne.appendChild(td_mois);
        tr_ligne.appendChild(td_min);
        tr_ligne.appendChild(td_max);
        tr_ligne.appendChild(td_moy);
        
        table.appendChild(tr_ligne);
    }

}

document.getElementsByTagName('body')[0].appendChild(table);
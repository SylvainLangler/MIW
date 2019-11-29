class Releve{

    constructor(temp,node){
        this.temp = temp;
        this.node = node;
    }

    display(){
        // <table border="1">
        this.table = document.createElement('table');
        this.table.setAttribute('border','1');
        this.table.setAttribute('style', 'text-align:center');

        // Ajout des éléments statiques du tableau
        this.tr = document.createElement('tr');

        // <th>Mois</th>
        this.th_mois = document.createElement('th');
        this.th_mois.setAttribute('style','width: 70px');
        this.th_mois_txt = document.createTextNode('Mois');
        this.th_mois.appendChild(this.th_mois_txt);

        // <th>Minimum</th>
        this.th_min = document.createElement('th');
        this.th_min.setAttribute('style','width: 70px');
        this.th_min_txt = document.createTextNode('Minimum');
        this.th_min.appendChild(this.th_min_txt);

        // <th>Maximum</th>
        this.th_max = document.createElement('th');
        this.th_max.setAttribute('style','width: 70px');
        this.th_max_txt = document.createTextNode('Maximum');
        this.th_max.appendChild(this.th_max_txt);

        // <th>Moyenne</th>
        this.th_moy = document.createElement('th');
        this.th_moy.setAttribute('style','width: 70px');
        this.th_moy_txt = document.createTextNode('Moyenne');
        this.th_moy.appendChild(this.th_moy_txt);

        // <tr> .... </tr>
        this.tr.appendChild(this.th_mois);
        this.tr.appendChild(this.th_min);
        this.tr.appendChild(this.th_max);
        this.tr.appendChild(this.th_moy);

        // <table> <tr> .... </tr> </table>
        this.table.appendChild(this.tr);

        // Tableau des lignes (tr)
        this.tabLignes = [];

        for(let index in this.temp){

            if(this.temp.hasOwnProperty(index)){

                // <tr> </tr>
                this.tr_ligne = document.createElement('tr');
                this.tr_ligne.setAttribute('style', 'background-color: #687368; color:white;');
                this.tr_ligne.setAttribute('id', 'tr_'+index);

                this.tr_ligne.onmouseover = () => {
                    this.colorGreen(this.tabLignes[index]);
                }

                this.tr_ligne.onmouseleave = () => {
                    this.colorGrey(this.tabLignes[index]);
                }

                this.tr_ligne.onclick = () => {
                    if(this.tabLignes[index].className == 'active'){
                        this.fold(index);
                    }
                    else{
                        this.unfold(index);
                    }
                }

                // <td> {{ mois }} </td>
                this.td_mois = document.createElement('td');
                this.td_mois_txt = document.createTextNode(this.temp[index]['mois']);
                this.td_mois.appendChild(this.td_mois_txt);

                // <td> {{ minimum }} </td>
                this.td_min = document.createElement('td');
                this.td_min_txt = document.createTextNode(this.temp[index]['tp'].min());
                this.td_min.appendChild(this.td_min_txt);

                // <td> {{ maximum }} </td>
                this.td_max = document.createElement('td');
                this.td_max_txt = document.createTextNode(this.temp[index]['tp'].max());
                this.td_max.appendChild(this.td_max_txt);

                // <td> {{ moyenne }} </td>
                this.td_moy = document.createElement('td');
                this.td_moy_txt = document.createTextNode(this.temp[index]['tp'].avg());
                this.td_moy.appendChild(this.td_moy_txt);

                // <tr> .... </tr>
                this.tr_ligne.appendChild(this.td_mois);
                this.tr_ligne.appendChild(this.td_min);
                this.tr_ligne.appendChild(this.td_max);
                this.tr_ligne.appendChild(this.td_moy);
                
                // On ajoute la ligne (tr) au tableau
                this.tabLignes.push(this.tr_ligne);

                this.table.appendChild(this.tr_ligne);
            }

        }

        this.node.appendChild(this.table);
    }

    colorGreen(line){
        line.style.backgroundColor = "green";
    }

    colorGrey(line){
        line.style.backgroundColor = "#687368";
    }

    fold(index){
        for(let i = 0; i < this.temp[index]['tp'].length; i++){
            document.getElementById('tr_'+index).removeChild(document.getElementById('tr_'+index+'_tp_'+i));
        }
        document.getElementById('tr_'+index).setAttribute('class', '');
    }

    unfold(index){
        for(let i = 0; i < this.temp[index]['tp'].length; i++){
            this.td_temp = document.createElement('td');
            this.td_temp.setAttribute('id','tr_'+index+'_tp_'+i);
            this.td_temp_txt = document.createTextNode(this.temp[index]['tp'][i]);
            this.td_temp.appendChild(this.td_temp_txt);

            document.getElementById('tr_'+index).appendChild(this.td_temp);
            document.getElementById('tr_'+index).setAttribute('class', 'active');
        }
    }
}


// Instanciation de la classe

temp = [{"mois":"Janvier","tp":[2,1,5,2,10,-10,11,2,1,0,5,2,2,10,5,2,2,0,-2,1,2,0,5,-8,0,5,2,2,10,5,2]},
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

let releve = new Releve(temp, document.getElementsByTagName('body')[0]);

// Affichage du tableau
releve.display();




/*

Procédure initialise([E/S] T: tableau[0..4,0..4] d'entiers)   //  permet d'initialiser un tableau 5 lignes , 5 colonnes avec des zéros
Procédure remplissage([E/S] T: tableau[0..4,0..4] d'entiers)  // permet de mettre 10 fois la valeur 1 de manière aléatoire dans le tableau. On supposera que la fonction alea(n) tire au sort un chiffre entre 0 et n.

fonction comptage([E] T: tableau[0..4,0..4] d'entiers) : entier  // retourne le nombre de fois ou quatre valeurs 1 se suivent ( horizontalement, verticalement ou en diagonale )

*/

tab = [];

tabTestHorizontalWin = [[1,1,1,1,1],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

tabTestVerticalWin = [[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]]


/**
 * 
 * @param tab
 * création du tableau à deux dimensions 
 */
function initialise(tab){
    for(let i=0; i<5;i++){
        tab[i] = [];
        for(let j=0; j<5; j++){
            tab[i][j] = 0;
        }
    }
}

/**
 * 
 * @param tab 
 * remplis le tableau avec 10 1 et le reste de 0
 */
function remplissage(tab){
    nb1 = 0;
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            let n = Math.round(Math.random());
            if(n == 1){
                if(nb1 < 10){
                    tab[i][j] = 1;
                    nb1++;
                }
                else{
                    tab[i][j] = 0;
                }
            }
            else{
                tab[i][j] = 0;
            }
        }
    }
}

function comptage(tab){
    let nbWin = 0;
    for(let i=0; i<5; i++){
        nbWin += horizontalWin(tab, i);
        
        //nbWin += diagonalWin(tab,i);
        for(let j=0; j<5; j++){
            nbWin += verticalWin(tab, i, j);
        }
    }
    return nbWin;
}

function horizontalWin(tab, i){
    let nbWin = 0;
    if(i < 2){
        for(j=0; j<2;j++){
            k = 0;
            while(tab[i][k] == 1 && k<5){
                k++;
                j++;
            }
            if(k == 4 || k == 5){
                nbWin++;
            }
        }
    }
    return nbWin;
}

function verticalWin(tab, i, j){
    let nbWin = 0;
    if(j < 2){
        for(i=0; i<2;i++){
            k = 0;
            
            if(k == 4 || k == 5){
                nbWin++;
            }
        }
    }
    return nbWin;
}

function diagonalWin(tab,i){

}

initialise(tab);

remplissage(tab);

//console.log(tab);
//console.log(tabTest);
console.log(tabTestHorizontalWin);
console.log(comptage(tabTestHorizontalWin));








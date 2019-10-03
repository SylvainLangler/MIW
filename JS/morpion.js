/*

Procédure initialise([E/S] T: tableau[0..4,0..4] d'entiers)   //  permet d'initialiser un tableau 5 lignes , 5 colonnes avec des zéros
Procédure remplissage([E/S] T: tableau[0..4,0..4] d'entiers)  // permet de mettre 10 fois la valeur 1 de manière aléatoire dans le tableau. On supposera que la fonction alea(n) tire au sort un chiffre entre 0 et n.

fonction comptage([E] T: tableau[0..4,0..4] d'entiers) : entier  // retourne le nombre de fois ou quatre valeurs 1 se suivent ( horizontalement, verticalement ou en diagonale )

*/

tab = [];

tabTestHorizontalWin = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[1,1,1,1,1]];

tabTestVerticalWin = [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]];

tabTestDiagonalWin = [[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]];
tabTestDiagonalWin2 = [[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]];

test= [[1, 0, 0, 0, 1],[0, 1, 1, 0, 0],[0, 0, 0, 1, 0],[1, 0, 0, 1, 1],[1, 0, 0, 1, 0]];


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
        for(let j=0; j<5; j++){
            if(i<2){
                nbWin += verticalWin(tab, i, j);
                nbWin += diagonalWin(tab, i, j);
            }
            if(j<2){
                nbWin += horizontalWin(tab, i, j);
            }
        }
    }
    return nbWin;
}

function horizontalWin(tab, i, j){
    let nbWin = 0;
    k = 0;
    
    while(tab[i][j] == 1 && j<5){
        j++;
        k++;
    }
    if(k == 4 || k == 5){
        nbWin++;
    }

    if(nbWin >=1){
        console.log("horizontal win");
    }
    return nbWin;
}

function verticalWin(tab, i, j){
    let nbWin = 0;
    k = 0;
    while(tab[i][j] == 1 && i<4 ){
        i++;
        k++;
    }
    if(k == 4 || k == 5){
        nbWin++;
    }

    if(nbWin >=1){
        console.log("vertical win");
    }
    return nbWin;
}

// Problème diago, il n'arrive pas à dire qu'il y a win si 1,1 -> 2,2 -> 3,3 -> 4,4 idée: refaire un while et en mettant if tab[4,4] == 1 et if tab[4,0] == 1
function diagonalWin(tab,i,j){
    let nbWin = 0;
    if(j > 2 && tab[i][j] == 1){
        k = 0;
        for(i;i<4;i++){
            if((j-1) >= 0){
                console.log(i,j);
                if(tab[i+1][j-1] == 1){
                    k++;
                }
                j--;
            }
        }
        if(k == 4 | k == 5){
            nbWin++;
        }
    }
    else{
        k = 0;
        
        for(i;i<4;i++){
            if((j+1) < 5){
                console.log(i,j);
                if(tab[i+1][j+1] == 1){
                    k++;
                }
                j++;
            }
        }
        console.log("k: "+k);
        if(k == 4 | k == 5){
            nbWin++;
        }
    }

    if(nbWin >=1){
        console.log("diago win");
    }
    return nbWin;
}

initialise(tab);

remplissage(tab);

//console.log(tab);
//console.log(tabTest);
console.log(tabTestDiagonalWin);
console.log(comptage(tabTestDiagonalWin));








/*
    Tableaux de test pendant le dev

tabTestHorizontalWin = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[1,1,1,1,1]];

tabTestVerticalWin = [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]];

tabTestDiagonalWin = [[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]];
tabTestDiagonalWin2 = [[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]];

testDD2=[[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,0,0,0,0]];


test= [[1, 0, 0, 0, 1],[0, 1, 1, 0, 0],[0, 0, 0, 1, 0],[1, 0, 0, 1, 1],[1, 0, 0, 1, 0]];*/


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
 * on peut aussi faire, tant que nb1 < 10, i=alea(0,4), j=aléa(0,4), si t[i][j] == 2 alors t[i][j]=1, nb1++
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

/*function comptageBIS(tab){
    let nbwin = 0;
    let s1=0;
    let s2=0;
    let s3=0;
    let s4=0;
    let s5=0;
    let s6=0;
    let s7=0;
    let s8=0;
    for(let i=0;i<5;i++){
        for(let j=0;j<4;j++){
            s1 += tab[i][j];
            s2 += tab[i][j+1];
            s3 += tab[j][i];
            s4 += tab[j+1][i];
            if(i == 0){
                s5 += tab[3-j][i];
                s6 += tab[j+1][5-j];
                s7 += tab[4-j][j];
                s8 += tab[j][4-j];
            }
        }
    }
    if(s1 == 4){
        nbwin++;
    }
    if(s2 == 4){
        nbwin++;
    }
    if(s3 == 4){
        nbwin++;
    }
    if(s4 == 4){
        nbwin++;
    }
    if(s5 == 4){
        nbwin++;
    }
    if(s6 == 4){
        nbwin++;
    }
    if(s7 == 4){
        nbwin++;
    }
    if(s8 == 4){
        nbwin++;
    }
    return nbwin;
}*/

function horizontalWin(tab, i, j){
    let nbWin = 0;
    k = 0;
    
    while(j<5 && tab[i][j] == 1){
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
    while(i<5 && tab[i][j] == 1){
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

function diagonalWin(tab,i,j){
    let nbWin = 0;
    if(j > 2 && tab[i][j] == 1){
        k = 0;
        
        while(i<5 && j>=0 && tab[i][j] == 1){
            k++;
            i++;
            j--;
        }
        if(i == 4 && j == 0 && tab[i][j] == 1){
            k++;
        }
        if(k == 4 | k == 5){
            nbWin++;
        }
    }
    if(j < 2 && tab[i][j] == 1){
        k = 0;
        while(i<5 && j<5 && tab[i][j] == 1){
            k++;
            i++;
            j++;
        }
        if(i == 4 && j == 4 && tab[i][j] == 1){
            k++;
        }
        if(k == 4 | k == 5){
            nbWin++;
        }
    }

    if(nbWin >=1){
        console.log("diago win");
    }
    return nbWin;
}

function affichageMorpion(tab){
    document.querySelector(".morpion").innerHTML= "";
    var html = "<table>";
    for(let i = 0;i<5;i++){
        html += "<tr>";
        for(let j = 0; j<5; j++){
            html+= "<td>"+tab[i][j]+"</td>";
        }
        html += "</tr>";
    }
    html +="</table><br>Il y a "+comptageBIS(tab)+" victoire(s)";
    document.querySelector(".morpion").innerHTML+= html;
}


function play(){
    tab = [];

    initialise(tab);

    remplissage(tab);
    
    comptageBIS(tab);
    
    affichageMorpion(tab);
}








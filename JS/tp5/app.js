class Isbn{

    Reg = {
        isbn: /(978|979)-\d-\d{5}-\d{3}-\d/
    }

    // isbn conforme: 978-2-86889-006-1

    constructor(){
        
        /*if(Isbn.count == undefined){
            Isbn.count = 1;
        }
        else{
            Isbn.count ++;
        }*/

    }  
    
    // Vérifie la conformité du numéro entré
    conformeISBN(n){
        return (this.Reg.isbn.test(n));
    }

    // Vérifie la validité du numéro entré
    valideISBN(n){
        let somme = 0 ;
        
        n = n.replace(/-/g,'')+'0';
        
        for(let i=0; i<n.length; i+=2){ somme += n[i]*1 + n[i+1]*3;}

        //somme = n[0]*1+n[2]*1+n[4]*1+n[6]*1+n[8]*1+n[10]*1+n[12]*1+n[1]*3+n[3]*3+n[5]*3+n[7]*3+n[9]*3+n[11]*3; // On peut remplacer n[0] par n.charAt(0)
        
        return somme % 10 == 0;
    }

    // Fonction test appelée lors du click sur le bouton OK, qui renvoit un message différent selon le numéro entré
    testISBN(isbn){


        let reponse = "";

        // Si l'utilisateur n'a rien entré
        if(isbn == ""){
            reponse = "Saisir un numéro ISBN";
        }
        else{
            // Si l'entrée n'est pas conforme
            if(!this.conformeISBN(isbn)){
                reponse = "ISBN non conforme";
            }
            else{
                // Si l'entrée n'est valide
                if(!this.valideISBN(isbn)){
                    reponse = "ISBN non valide";
                }
                else{
                    reponse = "ISBN valide";
                }
            }
        }

        // On affiche dans la div réponse, le message à montrer
        this.reponse.style.display = 'inline-block';
        this.reponse.innerHTML = reponse;
        
    }

    display(x,y,index){


        this.form = document.createElement('form');
        this.form.setAttribute('name','form');
        this.form.setAttribute('id','form');
        this.form.setAttribute('id','form');

        this.isbnLabel = document.createElement('label');
        this.isbnLabel.setAttribute('for', 'isbn');
        this.isbnLabel.appendChild(document.createTextNode('ISBN-13: '));

        this.isbn = document.createElement('input');
        this.isbn.setAttribute('type', 'text');
        this.isbn.setAttribute('name', 'isbn');
        this.isbn.setAttribute('id', 'isbn');

        this.sub = document.createElement('input');
        this.sub.setAttribute('type', 'button');
        this.sub.setAttribute('name', 'sub');
        this.sub.setAttribute('id', 'sub');
        this.sub.setAttribute('value', 'OK');

        this.reponse = document.createElement('div');
        this.reponse.setAttribute('id', 'reponse');

        this.form.appendChild(this.isbnLabel);
        this.form.appendChild(this.isbn);
        this.form.appendChild(this.sub);
        this.form.appendChild(this.reponse);

        document.getElementsByTagName('main')[0].appendChild(this.form);

        this.sub.onclick = () => {
            this.testISBN(this.isbn.value);
        }

        this.form.style.left = x+'px';
        this.form.style.top = y+'px';

    }


}
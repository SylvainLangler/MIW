class BalleClasse{

    //#px = 2;
    

    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.stopBoolean = false;
        this.pasX = 4;
        this.pasY = 4;
    }

    display(){

        this.buttonStart = document.createElement('button');
        this.buttonStart.setAttribute('type','button');
        this.buttonStart.appendChild(document.createTextNode('START'));
        this.buttonStart.onclick = () => {
            this.start();
        }

        this.buttonStop = document.createElement('button');
        this.buttonStop.setAttribute('type','button');
        this.buttonStop.appendChild(document.createTextNode('STOP'));
        this.buttonStop.onclick = () => {
            this.stop();
        }

        this.ball = document.createElement('img');
        this.ball.setAttribute('src', 'ball.png');
        this.ball.setAttribute('width', '50');
        this.ball.setAttribute('style', 'position:absolute; top:'+this.positionY+'px; left:'+this.positionX+'px');

        document.getElementsByTagName('main')[0].appendChild(this.buttonStart);
        document.getElementsByTagName('main')[0].appendChild(this.buttonStop);
        document.getElementsByTagName('main')[0].appendChild(this.ball);
    }

    start(){
        this.stopBoolean = false;

        this.moveBall();
        
        
        /*if(this.checkLimitWindow(this.positionX, this.positionY)){
            this.stop();
        }
        else{
            this.moveBall(this.pasX, this.pasY)
        }*/
    }

    stop(){
        this.stopBoolean = true;
    }

    moveBall(){
        if(!this.stopBoolean){
            if(this.positionX >= window.innerWidth - 50){
                this.pasX = -this.pasX
            }
            else if(this.positionX == 0){
                this.pasX = 4;
            }

            if(this.positionY >= window.innerHeight - 50){
                this.pasY = -this.pasY
            }
            else if(this.positionY == 0){
                this.pasY = 4;
            }
            
            this.positionX += this.pasX;
            this.positionY += this.pasY;
            this.ball.style.top = this.positionY+'px';
            this.ball.style.left = this.positionX+'px';
        }

        setTimeout(() => {
            this.moveBall()
        }, 5);
    }

    /*changeDirection(){
        if(this.positionX == (window.innerWidth-50)){
            this.pasX = -(this.pasX);
        }
        else{
            if(this.positionY == (window.innerHeight-50)){
                this.pasY = -(this.pasY);
            }
        }
        console.log(this.pasX, this.pasY);
    }*/

    /*touchWindowLimit(){
        return(this.positionX == window.innerWidth || this.positionY == window.innerHeight);
    }*/

}
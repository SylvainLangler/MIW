function moveBlind(y){
    let posTop = -460 + y;
    document.getElementsByClassName('img-volet')[0].style.backgroundPositionY = posTop+'px';
}

function getCursorPosition(value) {
    let y = null;
    if(value == 100){
        y = -624;
    }
    else if(value == 0){
        y = -1087;
    }
    else{
        y = 4.6 * value;
    }
    moveBlind(y);    
}

getCursorPosition(20);



//document.addEventListener("click", getCursorPosition);

//document.getElementById('slider').oninput(getCursorPosition);

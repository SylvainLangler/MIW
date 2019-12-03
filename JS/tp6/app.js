// CAS 1 
let c1_gris = document.getElementById('c1-gris');
c1_gris.addEventListener("click", gris, false);

let c1_vert = document.getElementById('c1-vert');
c1_vert.addEventListener("click", vert, false);

// CAS 2

let c2_gris = document.getElementById('c2-gris');
c2_gris.addEventListener("click", gris, true);

let c2_vert = document.getElementById('c2-vert');
c2_vert.addEventListener("click", vert, false);

// CAS 3

let c3_gris = document.getElementById('c3-gris');
c3_gris.addEventListener("click", gris, false);

let c3_vert = document.getElementById('c3-vert');
c3_vert.addEventListener("click", function(e){vert();e.stopPropagation();}, false);

// CAS 4

let c4_gris = document.getElementById('c4gris');
c4_gris.addEventListener("mousedown", function(e){calculatePosition(e)})

let c4_vert = document.getElementById('c4-vert');

function gris(){
    console.log("gris");
}

function vert(){
    console.log("vert");
}

function calculatePosition(e){
    var dx = (e.clientX) - (document.getElementById('c4gris').offsetLeft);
    var dy = (e.clientY) - (document.getElementById('c4gris').offsetTop);
    //console.log("dx,dy: "+dx,dy);
    //console.log("e.x, e.y"+e.clientX, e.clientY);   
    c4_gris.addEventListener("mousemove", function(e){move(e,dx,dy)}, true)
    // event mouse move

    // on mouse up on arrête de déplacer
    
}

function move(e, dx, dy){
    c4_gris.style.top = (e.clientY - dy)+'px';
    c4_gris.style.left = (e.clientX - dx)+'px';
    // marche po 
    //c4_gris.addEventListener("mouseup", function(e){e.stopPropagation()}, false)
}
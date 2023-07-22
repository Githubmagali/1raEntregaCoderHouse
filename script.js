const nombre =prompt('Ingresa tu nombre');
const mensaje = 'Bienvenid@  '+ nombre;
const velocidad= 200;


function escribirMensaje(){
    let indice=0;
    const intervalo= setInterval(()=>{
        if(indice < mensaje.length){
            document.getElementById('Bienvenido').innerHTML += mensaje.charAt(indice);
            indice++;
        }else{
            clearInterval(intervalo);
        }

    },velocidad);
}
window.onload =escribirMensaje;


function zoomIn(elemento){
    elemento.style.transform ="scale(1.2)";
}

function zoomOut(elemento){
    elemento.style.transform ="scale(1)";
}


const mensaje ='Bienvenido'; prompt('Ingresa tu nombre');
const velocidadDeEscritura= 200;

function escribirMensaje(){
    let indice=0;
    const intervalo= setInterval(()=>{
        if(indice < mensaje.length){
            document.getElementById('Bienvenido').innerHTML += mensaje.charAt(indice);
            indice++;
        }else{
            clearInverval(intervalo);
        }

    },velocidadDeEscritura);
}
window.onload =escribirMensaje;
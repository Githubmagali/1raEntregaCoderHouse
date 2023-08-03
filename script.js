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



async function mostrarDatos(){
    try{
        const response = await fetch ("http://127.0.0.1:5500/data.json");
        const jsonData = await response.json();
        const contenedor = document.getElementById('sponsor_1');

        jsonData.forEach((item)=>{
            const nombre =item.name;
            const p = document.createElement("p");
            p.textContent= nombre;
            contenedor.appendChild(p);
        });
    }catch (error){
        console.error('Error al mostrar los datos:', error);
    }
}
mostrarDatos();
/*
async function sponsor(){
    const response = await fetch("");
    const json = await response.json();
   
    const contenedor = document.getElementById('');
    contenedor.textContent= json.name;
}
sponsor();


let sponsor =document.querySelector("#sponsor_1");
fetch("data.json")
.then((resp) => resp.json())
.then((data)=>{
    console.log(data.results);

    data.map((item)=>{
        const content = document.createElement("div");
        content.innerHTML = `
        <h4>${item.name}</h4>
        `;
        sponsor.append(content);
    });
});
*/
const galeria00 = document.getElementById('comodidades');

//cada vez que tenemos combios en la pantalla se va a ejecutar, por ejemplo si bajamos y nos movemos en el sitio web
//entries es un metodo de un objeto que devuelve una matriz con pares clave-valor para cada propiedad enumerable del objeto
const observer00 = new IntersectionObserver((entriesn)=>{
if(entriesn[0].isIntersecting){ //isIntersecting hace que las imagenes sean visibles solo cuando estan en el foco de atencion 
  const trabajos00= galeria00.querySelectorAll('.imagen_asientos');
 trabajos00.forEach((traba, index) =>{
    setTimeout(()=>{
        traba.classList.add('imagen_asientos--visible');
    }, 200 * index);
  
 });
}
},{
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observer00.observe(galeria00);
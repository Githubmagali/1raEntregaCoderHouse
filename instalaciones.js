const galeria00 = document.getElementById('comodidades');

const observer00 = new IntersectionObserver((entriesn)=>{
if(entriesn[0].isIntersecting){ 
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
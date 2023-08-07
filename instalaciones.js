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

const fotos = document.getElementById('primera-clase');
const fotos2 = document.getElementById('ventana-trabajos');

const datos=[{
    id:"1",
    titulo:"Cabinas privadas",
    texto: "Disfruta de tu privacidad al 100%"},{
    id:"2",
    titulo:"Asientos eco cuero",
    texto: "Asientos reclinabes"},{
     id:"3",
     titulo:"Atencion personalizada",
     texto: "Profe apruebeme con diez"}
];

fotos.addEventListener('click', (e) =>{
    e.preventDefault();
    const fotoClick =e.target.closest('.box-img');
    if (fotoClick){
        const id= fotoClick.dataset.id;

         const datosc = datos.filter((datosc)=>{
          if(datosc.id === id){
             return datosc;
          }

        });
        const {titulo, texto} = datosc[0];
        fotos2.querySelector('.ventana__titulo').innerText = titulo;
        fotos2.querySelector('.ventana__parrafo').innerText = texto;
        fotos2.querySelector('.ventana__imagen').src = fotoClick.querySelector('img').src;
        fotos2.classList.add('ventana-active');
    }
});

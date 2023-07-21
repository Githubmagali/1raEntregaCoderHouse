
var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
   inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1){
         this.nextElementSibling.classList.add('fijar');
      }else{
         this.nextElementSibling.classList.remove('fijar');
      }
   });
}

const formulario= document.querySelector("#formulario");
const mail00= document.querySelector("#mail");
const telefono00= document.querySelector("#telefono");
const mensaje00= document.querySelector("#mensaje");

  function validarNombreCompleto() {
   const input000 = document.querySelector("#nombreCompleto");
   const nombre00 = input000.value;
   if (nombre00) {
     return true;
   }
   return false;
 }


 function validarMail() {
   const input000 = document.querySelector("#mail");
   const mail00 = input000.value;
   if (mail00) {
     return true;
   }
   return false;
 }
 
 function validarTelefono() {
   const input000 = document.querySelector("#telefono");
   const telefono00 = input000.value;
   if (telefono00) {
     return true;
   }
   return false;
 }

 function validarMensaje() {
   const input000 = document.querySelector("#mensaje");
   const mensaje00 = input000.value;
   if (mensaje00) {
     return true;
   }
   return false;
 }

 formulario.addEventListener("submit", function (e) {
   e.preventDefault();
 
   if (
     validarNombreCompleto() &&
     validarMail() &&
     validarTelefono() &&
     validarMensaje()
   
){
      
   const nuevoReg = {
     id: "1",
     mail: mail00.value,
     telefono: telefono00.value,
     mensaje: mensaje00.value,
  
   };
   const registroPasajeros = JSON.parse(window.localStorage.getItem("cont"));

   if (registroPasajeros) {
     const nuevosPasajeros = [...registroPasajeros, nuevoReg];
     window.localStorage.setItem("cont", JSON.stringify(nuevosPasajeros));
   } else {
     window.localStorage.setItem("cont", JSON.stringify([{ ...nuevoReg }]));
   }
 }

 });

 
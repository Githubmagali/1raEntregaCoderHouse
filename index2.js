

const formulario= document.querySelector("#formulario");
const nombreCompleto00 = document.querySelector("#nombreCompleto");
const dni00 = document.querySelector("#dni");
const correo00 = document.querySelector("#correo");
const pais00 = document.querySelector("#pais");
const ida00 = document.querySelector("#ida");
const vuelta00 = document.querySelector("#vuelta");

 
 function validarNombreCompleto() {
  const input000 = document.querySelector("#nombreCompleto");
  const nombreCompleto00 = input000.value;
  if (nombreCompleto00) {
    return true;
  }
  return false;
}


 function validarDni() {
  const input000 = document.querySelector("#dni");
  const dni00 = input000.value;
  if (dni00) {
    return true;
  }
  return false;
}
 
 function validarCorreo() {
   const input000 = document.querySelector("#correo");
   const correo00 = input000.value;
   if (correo00) {
     return true;
   }
   return false;
 }

 function validarPais() {
    const input000 = document.querySelector("#pais");
    const pais00 = input000.value;
    if (pais00) {
      return true;
    }
    return false;
  }
  function validarIda() {
    const input000 = document.querySelector("#ida");
    const ida00 = input000.value;
    if (ida00) {
      return true;
    }
    return false;
  }
  function validarVuelta() {
    const input000 = document.querySelector("#vuelta");
    const vuelta00 = input000.value;
    if (vuelta00) {
      return true;
    }
    return false;
  }

 formulario.addEventListener("submit", function (e) {
   e.preventDefault();
 
   if (
     validarNombreCompleto() &&
     validarDni() &&
     validarCorreo() &&
     validarPais() &&
     validarIda() &&
     validarVuelta()
   
){
      
   const nuevoReg = {
     id: "1",
     nombreCompleto: nombreCompleto00.value,
     dni:dni00.value,
     correo: correo00.value,
     pais: pais00.value,
     ida: ida00.value,
     vuelta:vuelta00.value
  
   };
   const registroPasajeros = JSON.parse(window.localStorage.getItem("cont"));

   if (registroPasajeros) {
     const nuevosPasajeros = [...registroPasajeros, nuevoReg];
     window.localStorage.setItem("cont", JSON.stringify(nuevosPasajeros));
     alert('Enviado exitosamente');
   } else {
     window.localStorage.setItem("cont", JSON.stringify([{ ...nuevoReg}]));
     alert('Enviado exitosamente');
   }
 }

 });

 
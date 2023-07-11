

const formulario = document.querySelector("#formulario");
const nombreCompleto00 = document.querySelector("#nombreCompleto");
const mail00 = document.querySelector('#mail');
const contrasena00 = document.querySelector("#contrasena");
const pais00 = document.querySelector("#pais");


function nombreCompleto() {
    const input = document.querySelector("#nombreCompleto");
    const nombreCompleto00 = input.value;
    if (nombreCompleto00) {
      //console.log("pais llego");
      return true;
    }
    //console.log("pais no llego");
    return false;
  }
  function validarCorreo() {
    const input00 = document.querySelector("#mail");
    const correo = input00.value;
    const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple version of an email regex
    //console.log("coreooo", input00.value, expReg.test(correo));
    if (!expReg.test(correo)) {
      input00.classList.add("--error");
      //console.log("correo no llego");
      return false;
    }
    //console.log("correo llego");
    return true;
  }

  function contrasena() {
    const input = document.querySelector("#contrasena");
    const verificarContrasena00 = input.value;
    //simple password regexp. it has to validate any password that's not empty of more than 3 characters
    const expReg = /^.{3,}$/;
    if (!expReg.test(verificarContrasena00)) {
        input.classList.add("--error");
      //console.log("llego");

      return false;
    }
    //console.log(" no llego");
    return true;
  }


  function pais() {
    const input = document.querySelector("#pais");
    const pais00 = input.value;
    if (pais00) {
      //console.log("pais llego");
      return true;
    }
    //console.log("pais no llego");
    return false;
  }

  
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (
     nombreCompleto() &&
     validarCorreo() &&
      contrasena() &&
      pais()
    ) {
      
      const nuevoReg = {
        id: "1",
        fecha: new Date(),
        nombre: nombreCompleto00.value,
        correo: mail00.value,
        contrasena: contrasena00.value,
        pais: pais00.value
      };
      const registroPasajeros = JSON.parse(window.localStorage.getItem("cont"));
  
      if (registroPasajeros) {
        const nuevosPasajeros = [...registroPasajeros, nuevoReg];
        window.localStorage.setItem("cont", JSON.stringify(nuevosPasajeros));
      } else {
        window.localStorage.setItem("cont", JSON.stringify([{ ...nuevoReg }]));
      }
    }
    if (nombreCompleto00.value === "") {
        nombreCompleto00.classList.add("rojo");
      } else {
        nombreCompleto00.classList.remove("rojo");
        nombreCompleto00.value = "";
      }
  
    if (mail00.value === "") {
        mail00.classList.add("rojo");
      } else {
        mail00.classList.remove("rojo");
        mail00.value = "";
      }
  
    if (pais00.value === "") {
      pais00.classList.add("rojo");
    } else {
      pais00.classList.remove("rojo");
      pais00.value = "";
    }
  
  
    if (contrasena00.value === "") {
      contrasena00.classList.add("rojo");
    } else {
      contrasena00.classList.remove("rojo");
      contrasena00.value = "";
    }
  });

const formulario = document.querySelector("#formulario");
const mail00 = document.querySelector("#mail");

function validarCorreo() {
    const input00 = document.querySelector("#mail");
    const correo = input00.value;
    const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple version of an email regex

    if (!expReg.test(correo)) {
      input00.classList.add("--error");
      return false;
    }
    return true;
  }

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (
      validarCorreo()
    ) {
      
      const nuevoReg = {
        id: "1",
        fecha: new Date(),
        correo: mail00.value,
      };
      const registroPasajeros = JSON.parse(window.localStorage.getItem("contenedor"));
  
      if (registroPasajeros) {
        const nuevosPasajeros = [...registroPasajeros, nuevoReg];
        window.localStorage.setItem("contenedor", JSON.stringify(nuevosPasajeros));
      } else {
        window.localStorage.setItem("contenedor", JSON.stringify([{ ...nuevoReg }]));
      }
    }
      if (mail00.value === "") {
        mail00.classList.add("rojo");
      } else {
        mail00.classList.remove("rojo");
        mail00.value = "";
      }
    });
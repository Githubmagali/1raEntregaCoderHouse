//Continue, utiliza igualdad esticta para saltar el bucle

const destinos = [
    "*Ciudad de Mexico",
    "*Bs As Ezeiza",
    "*Rio de Janeiro",
    "*Chile Region Metropolitana ",
    "*Peru Coscu",
  ];
  console.log("Destinos disponibles : ");
  
  for (let i = 0; i < destinos.length; i++) {
    if (destinos[i] === "Chile Region Metropolitana ") {
      continue;
    }
    console.log(destinos[i]);
  }
  
  //Ciclo forEach recorre el array
  
  const K1 = ["HSBC ", "Amex ", "NaranjaX"];
  K1.forEach((A) => {
    console.log(` Pagando con ${K1} credito tenes un 15% de descuento  `);
  });
  
  //Condicional
  
  const vTotal = (parametro1, parametro2, parametro3) => {
    if (parametro1 === "ifSuma") {
      console.log(
        `Cupos de descuentos para viajar en primera línea  ${
          parametro2 + parametro3
        }`
      );
    } else if (parametro1 === "elseIfresta") {
      console.log(
        `Cupos de descuentos para viajar en segunda línea ${
          parametro2 - parametro3
        }`
      );
    }
  };
  vTotal("ifSuma", 15, 9);
  vTotal("elseIfresta", 15, 7);
  
  //Evento
  
  const boton = document.querySelectorAll(".btn-agregar");
  
  boton.forEach((boton02) => {
    boton02.addEventListener("click", () => {
      console.log(
        "Aun no hemos terminado con esta funcionalidad, disculpe las molestias"
      );
    });
  });
  
  const input = document.getElementById("contrasena");
  
  input.addEventListener("blur", (e) => {
    console.log("saliste de foco");
  });
  
  const select = document.getElementById("pais");
  select.addEventListener("change", () => {
    const opcionSeleccionada = select.value;
    console.log("Seleccionaste: " + opcionSeleccionada);
  });
  
  const formulario = document.querySelector("#formulario");
  const mail00 = document.querySelector("#mail");
  const contrasena00 = document.querySelector("#contrasena");
  const pais00 = document.querySelector("#pais");
  const fecha00 = document.querySelector("#fecha");
  const terminos00 = document.querySelector("#terminos");
  
  function validarCorreo() {
    const input00 = document.querySelector("#mail");
    const correo = input00.value;
    const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple version of an email regex
    console.log("coreooo", input00.value, expReg.test(correo));
    if (!expReg.test(correo)) {
      input00.classList.add("--error");
      //console.log("correo no llego");
      return false;
    }
    //console.log("correo llego");
    return true;
  }
  
  function validarContrasena() {
    const input000 = document.querySelector("#contrasena");
    const contrasena00 = input000.value;
    //simple password regexp. it has to validate any password that's not empty of more than 3 characters
    const expReg = /^.{3,}$/;
    //console.log("contrasenaaaa", contrasena00, expReg.test(contrasena00));
    if (!expReg.test(contrasena00)) {
      input000.classList.add("--error");
      //console.log("contrasena no llego");
      return false;
    }
    //console.log("contrasena llego");
    return true;
  }
  
  function validarPais() {
    const input = document.querySelector("#pais");
    const pais = input.value;
    if (pais) {
      console.log("pais llego");
      return true;
    }
    console.log("pais no llego");
    return false;
  }
  
  function validarFecha() {
    const input000 = document.querySelector("#fecha");
    const fecha00 = input000.value;
    if (fecha00) {
      console.log("fecha llego");
      return true;
    }
    console.log("fecha no llego");
    return false;
  }
  
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (
      validarCorreo() &&
      validarContrasena() &&
      validarPais() &&
      validarFecha()
    ) {
      
      const nuevoReg = {
        id: "1",
        fecha: new Date(),
        correo: mail00.value,
        contrasena: mail00.value,
        pais: pais00.value,
        fechaa: fecha00.value,
      };
      const registroPasajeros = JSON.parse(window.localStorage.getItem("cont"));
  
      if (registroPasajeros) {
        const nuevosPasajeros = [...registroPasajeros, nuevoReg];
        window.localStorage.setItem("cont", JSON.stringify(nuevosPasajeros));
      } else {
        window.localStorage.setItem("cont", JSON.stringify([{ ...nuevoReg }]));
      }
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
  
    if (fecha00.value === "") {
      fecha00.classList.add("rojo");
    } else {
      fecha00.classList.remove("rojo");
      fecha00.value = "";
    }
  
    if (terminos00.checked === false) {
      terminos00.classList.add("rojo");
    } else {
      terminos00.classList.remove("rojo");
      terminos00.value = "";
    }
  
    if (contrasena00.value === "") {
      contrasena00.classList.add("rojo");
    } else {
      contrasena00.classList.remove("rojo");
      contrasena00.value = "";
    }
  });
 // Referencias a elementos clave del formulario
 const tipoSolicitud = document.getElementsByName("tipoSolicitud");
 const numeroLockerDiv = document.getElementById("numeroLockerDiv");
 const numeroLocker = document.getElementById("numeroLocker");
 const form = document.getElementById("FormLock");

 // Mostrar/ocultar el campo de número de locker según la selección
 tipoSolicitud.forEach((radio) => {
     radio.addEventListener("change", () => {
         if (radio.value === "renovacion") {
             numeroLockerDiv.style.display = "block";
             numeroLocker.setAttribute("required", true);
         } else {
             numeroLockerDiv.style.display = "none";
             numeroLocker.removeAttribute("required");
         }
     });
 });

 // Validación básica al enviar el formulario
 form.addEventListener("submit", (event) => {
     let valid = true;

     // Validar correo institucional
     const correo = document.getElementById("correo").value;
     if (!correo.endsWith("@alumno.ipn.mx")) {
         alert("El correo debe ser del dominio @alumno.ipn.mx");
         valid = false;
     }

     // Validar teléfono
     const tel = document.getElementById("tel").value;
     if (!/^\d{10}$/.test(tel)) {
         alert("El teléfono debe contener exactamente 10 dígitos.");
         valid = false;
     }

     // Validar boleta
     const boleta = document.getElementById("boleta").value;
     if (!/^\d{10}$/.test(boleta)) {
         alert("El número de boleta debe contener exactamente 10 dígitos.");
         valid = false;
     }

     const estatura = document.getElementById("estatura").value;
     if (estatura && (isNaN(estatura) || estatura < 0 || estatura > 2.3)) {
         alert("La estatura debe ser un número entre 0 y 2.3 metros.");
         valid = false;
     }
 
     // Validar edad
     const edad = document.getElementById("edad").value;
     if (edad && (isNaN(edad) || edad <= 0)) {
         alert("La edad debe ser un número mayor a 0.");
         valid = false;
     }

     if (!valid) {
         event.preventDefault(); // Evitar envío si hay errores
     } else {
         alert("Formulario enviado correctamente.");
     }
 });
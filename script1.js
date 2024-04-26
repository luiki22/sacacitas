// Datos estáticos de las provincias y comisarías de policía nacional
const provincias = [
    { nombre: "Cordoba", comisarias: ["Comisaría 1", "Comisaría 2"] },
    { nombre: "Huelva", comisarias: ["Comisaría 3", "Comisaría 4"] },
    { nombre: "Sevilla", comisarias: ["Comisaría 1", "Comisaría 2"] },
    { nombre: "Cadiz", comisarias: ["Comisaría 3", "Comisaría 4"] },
    { nombre: "Malaga", comisarias: ["Comisaría 1", "Comisaría 2"] },
    { nombre: "Almería", comisarias: ["Comisaría 3", "Comisaría 4"] },
    { nombre: "Granada", comisarias: ["Comisaría 1", "Comisaría 2"] },
    { nombre: "Jaen", comisarias: ["Comisaría 1", "Comisaría 2"] },
    // Añadir el resto de provincias con sus respectivas comisarías
  ];
  
  const provinciaSelect = document.getElementById("provincia");
  const comisariaSelect = document.getElementById("comisaria");
  const mensajeDiv = document.getElementById("mensaje");
  const aceptarBtn = document.getElementById("aceptar-btn");
  const enviarButton = document.createElement("button");
  
  // Función para llenar el select de provincias
  function llenarProvincias() {
    provincias.forEach(provincia => {
      const option = document.createElement("option");
      option.value = provincia.nombre;
      option.textContent = provincia.nombre;
      provinciaSelect.appendChild(option);
    });
  }
  
  // Función para llenar el select de comisarías según la provincia seleccionada
  function llenarComisarias(provincia) {
    comisariaSelect.innerHTML = "<option value='seleccionar'>Seleccionar Comisaría</option>";
    const provinciaData = provincias.find(p => p.nombre === provincia);
    provinciaData.comisarias.forEach(comisaria => {
      const option = document.createElement("option");
      option.value = comisaria;
      option.textContent = comisaria;
      comisariaSelect.appendChild(option);
    });
  }
  
  // Llenar select de provincias al cargar la página
  llenarProvincias();
  
  // Event listener para el cambio de provincia
  provinciaSelect.addEventListener("change", function() {
    const provinciaSeleccionada = this.value;
    llenarComisarias(provinciaSeleccionada);
  });
  
  // Event listener para verificar si ambos campos están completos
    function verificarCamposCompletos() {
    const provinciaSeleccionada = provinciaSelect.value;
    const comisariaSeleccionada = comisariaSelect.value;
    if (provinciaSeleccionada !== "seleccionar" && comisariaSeleccionada !== "seleccionar") {
      // Mostrar el mensaje con el importe y la información adicional
      mensajeDiv.innerHTML =`
      <p>*SIN PAGO POR ADELANTADO*</p>
      <p>IMPORTANTE:</p>
      <p>- El importe a pagar es de 18 euros.</p>
      <p>- Se pagará únicamente tras conseguir la cita previa y verificar que todo los datos son correctos.</p>
      <p>- Tras clicar en "Continuar", le mostrara los campos a completar con la información personal.</p>
      <p>- Una vez se haya enviado el formulario, recibiras un correo electronico (si todo esta correcto), a traves del cual le indicaremos los siguientes pasos a seguir.</p>
    `;
      mensajeDiv.style.display = "block"; // Mostrar el div de mensaje
    } else {
      // Ocultar el mensaje si los campos no están completos
      mensajeDiv.innerHTML = "";
      mensajeDiv.style.display = "none"; // Ocultar el div de mensaje
    }
  }
  
  // Event listener para el cambio de comisaría
  comisariaSelect.addEventListener("change", verificarCamposCompletos);

// Función para resetear el formulario
function resetearFormulario() {
    document.getElementById("formulario").reset(); // Resetea el formulario
    mensajeDiv.innerHTML = ""; // Elimina el mensaje
    mensajeDiv.style.display = "none"; // Oculta el div de mensaje
}

let camposAgregados = false;

function mostrarCampos() {
    if (!camposAgregados) {
        // Verificar si se ha seleccionado una provincia y una comisaría
        const provinciaSeleccionada = provinciaSelect.value;
        const comisariaSeleccionada = comisariaSelect.value;

        if (provinciaSeleccionada !== "seleccionar" && comisariaSeleccionada !== "seleccionar") {
            // Creamos un nuevo div para contener los campos adicionales
            const nuevosCamposDiv = document.createElement("div");
            nuevosCamposDiv.classList.add("nuevos-campos");

            // Creamos los campos adicionales
            const desdeLabel = document.createElement("label");
            desdeLabel.textContent = "Desde:";
            const desdeInput = document.createElement("input");
            desdeInput.type = "date";
            desdeInput.name = "desde";

            const hastaLabel = document.createElement("label");
            hastaLabel.textContent = "Hasta:";
            const hastaInput = document.createElement("input");
            hastaInput.type = "date";
            hastaInput.name = "hasta";

            const nombreLabel = document.createElement("label");
            nombreLabel.textContent = "Nombre:";
            const nombreInput = document.createElement("input");
            nombreInput.type = "text";
            nombreInput.name = "nombre";

            const apellido1Label = document.createElement("label");
            apellido1Label.textContent = "Apellido1:";
            const apellido1Input = document.createElement("input");
            apellido1Input.type = "text";
            apellido1Input.name = "apellido1";

            const apellido2Label = document.createElement("label");
            apellido2Label.textContent = "Apellido2:";
            const apellido2Input = document.createElement("input");
            apellido2Input.type = "text";
            apellido2Input.name = "apellido2";

            const fechaNacimientoLabel = document.createElement("label");
            fechaNacimientoLabel.textContent = "Fecha de nacimiento:";
            const fechaNacimientoInput = document.createElement("input");
            fechaNacimientoInput.type = "date";
            fechaNacimientoInput.name = "fecha_nacimiento";

            const pasaporteLabel = document.createElement("label");
            pasaporteLabel.textContent = "Pasaporte/DNI/NIF:";
            const pasaporteInput = document.createElement("input");
            pasaporteInput.type = "text";
            pasaporteInput.name = "pasaporte";

            const correoLabel = document.createElement("label");
            correoLabel.textContent = "Correo electrónico:";
            const correoInput = document.createElement("input");
            correoInput.type = "text";
            correoInput.name = "correo_electronico";

            const numberLabel = document.createElement("label");
            numberLabel.textContent = "Teléfono de contacto:";
            const numberInput = document.createElement("input");
            numberInput.type = "text";
            numberInput.name = "numero_telefono";

            // Agregamos los nuevos campos al div
            nuevosCamposDiv.appendChild(desdeLabel);
            nuevosCamposDiv.appendChild(desdeInput);
            nuevosCamposDiv.appendChild(hastaLabel);
            nuevosCamposDiv.appendChild(hastaInput);
            nuevosCamposDiv.appendChild(nombreLabel);
            nuevosCamposDiv.appendChild(nombreInput);
            nuevosCamposDiv.appendChild(apellido1Label);
            nuevosCamposDiv.appendChild(apellido1Input);
            nuevosCamposDiv.appendChild(apellido2Label);
            nuevosCamposDiv.appendChild(apellido2Input);
            nuevosCamposDiv.appendChild(fechaNacimientoLabel);
            nuevosCamposDiv.appendChild(fechaNacimientoInput);
            nuevosCamposDiv.appendChild(pasaporteLabel);
            nuevosCamposDiv.appendChild(pasaporteInput);
            nuevosCamposDiv.appendChild(correoLabel);
            nuevosCamposDiv.appendChild(correoInput);
            nuevosCamposDiv.appendChild(numberLabel);
            nuevosCamposDiv.appendChild(numberInput);

            const enviarButton = document.createElement("button");
            enviarButton.type = "button"; // Cambiado de "submit" a "button" para evitar el envío del formulario
            enviarButton.textContent = "Enviar";
            // Agregamos el evento al botón si es necesario
            enviarButton.addEventListener("click", function(event) {
                // Aquí puedes agregar la lógica para enviar los datos del formulario
                event.preventDefault(); // Evita el comportamiento predeterminado del formulario
                const datosFormulario = {
                    provincia: provinciaSeleccionada,
                    comisaria: comisariaSeleccionada,
                    desde: desdeInput.value,
                    hasta: hastaInput.value,
                    nombre: nombreInput.value,
                    apellido1: apellido1Input.value,
                    apellido2: apellido2Input.value,
                    fecha_nacimiento: fechaNacimientoInput.value,
                    pasaporte: pasaporteInput.value,
                    correo_electronico: correoInput.value,
                    telefono_contacto: numberInput.value
                };
                // Enviar los datos a la API
                console.log(datosFormulario);
                enviarDatosAPI(datosFormulario);
            });

// Función para enviar los datos del formulario a la API
function enviarDatosAPI(datosFormulario) {
  // URL de tu API para comprobar si ya existe el pasaporte
  const urlConsulta = `http://localhost:3000/Datos?pasaporte=${datosFormulario.pasaporte}`;

  // Hacer una solicitud GET al servidor para comprobar si ya existe un registro con el mismo pasaporte
  fetch(urlConsulta)
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Error al consultar el servidor');
          }
      })
      .then(data => {
          if (data.length > 0) {
              // Si ya existe un registro con el mismo pasaporte, mostrar un mensaje de error
              mensajeEnv.innerHTML = "Ya existe un registro con el mismo pasaporte.";
              mensajeEnv.style.display = "block"; // Mostrar el div de mensaje

              // Ocultar el mensaje después de 3 segundos
              setTimeout(function() {
                  mensajeEnv.innerHTML = "";
                  mensajeEnv.style.display = "none"; // Ocultar el div de mensaje
              }, 3000);
          } else {
              // Si no existe un registro con el mismo pasaporte, proceder con el envío de los datos a la API
              // URL de tu API para enviar los datos
              const urlEnvio = 'http://localhost:3000/Datos';

              // Opciones de la petición POST
              const opciones = {
                  method: 'POST', // Método HTTP
                  headers: {
                      'Content-Type': 'application/json' // Tipo de contenido JSON
                  },
                  body: JSON.stringify(datosFormulario) // Convertir el objeto a formato JSON
              };

              // Enviar la petición POST para agregar los datos al servidor
              fetch(urlEnvio, opciones)
                  .then(response => {
                      if (response.ok) {
                          return response.json();
                      } else {
                          throw new Error('Error al enviar los datos al servidor');
                      }
                  })
                  .then(data => {
                      // Mostrar mensaje de éxito
                      mensajeEnv.innerHTML = "Los datos se han enviado correctamente.";
                      mensajeEnv.style.display = "block"; // Mostrar el div de mensaje

                      // Ocultar el mensaje después de 3 segundos
                      setTimeout(function() {
                          mensajeEnv.innerHTML = "";
                          mensajeEnv.style.display = "none"; // Ocultar el div de mensaje
                      }, 3000);
                  })
                  .catch(error => {
                      console.error('Error al enviar los datos al servidor:', error);
                  });
          }
      })
      .catch(error => {
          console.error('Error al consultar el servidor:', error);
      });
}


               
            // Agregamos el botón "Enviar" al mismo div
            nuevosCamposDiv.appendChild(enviarButton);

            // Agregamos el nuevo div con los campos al formulario
            formulario.appendChild(nuevosCamposDiv);

            // Actualizamos la variable de control
            camposAgregados = true;
        } else {
            alert("Por favor, selecciona una provincia y una comisaría antes de continuar.");
        }
    }
}




// Event listener para el cambio de comisaría
comisariaSelect.addEventListener("change", verificarCamposCompletos);

// Event listener para el botón de ACEPTAR
aceptarBtn.addEventListener("click", mostrarCampos);



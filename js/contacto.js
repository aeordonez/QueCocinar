const formulario = document.getElementById('formulario');
// accedo al formulario
const inputs = document.querySelectorAll('#formulario input');
// almaceno todos los input del formulario

const textarea = document.getElementById('comentarios');
const div1 = document.getElementById('div1');
const terminos = document.getElementById('terminos');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    telefono: /^[09][0-9]{6,9}$/
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');

            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
     
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#${campo} .input-error`)?.classList.remove('input-error-activo')

        campos[campo] = true
    } else {
        document.getElementById(`${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${campo} .input-error`)?.classList.add('input-error-activo')
        campos[campo] = false
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // const terminos = document.getElementById('terminos')
    if (campos.nombre && campos.apellido && campos.correo
        && campos.telefono
        && terminos.checked
     ) 
    
    {
    formulario.reset();
     document.getElementById('mensaje-exitoso').classList.add('mensaje-exitoso-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exitoso').classList.remove('mensaje-exitoso-activo');
        }, 2000);

        document.querySelectorAll('.grupo-correcto').forEach((icono) => {
            icono.classList.remove('grupo-correcto');
        });
    }else {
        document.getElementById('mensaje').classList.add('mensaje-activo');
     setTimeout(() => {
            document.getElementById('mensaje').classList.remove('mensaje-activo');
        }, 2000);

      document.querySelectorAll('.grupo-incorrecto').forEach((icono) => {
        icono.classList.remove('grupo-incorrecto');
      })}

  })
 
function resetFormulario() {

    document.querySelectorAll('.grupo-correcto').forEach((icono) => {
        icono.classList.remove('grupo-correcto');
    });
    document.querySelectorAll('.grupo-incorrecto').forEach((icono) => {
        icono.classList.remove('grupo-incorrecto');
    });
    document.querySelectorAll('.input-error-activo').forEach((mensajeError) => {
        mensajeError.classList.remove('input-error-activo');
    });
    document.querySelectorAll('.fa-check-circle').forEach((icono) => {
        icono.classList.remove('fa-check-circle');
    });
    document.querySelectorAll('.fa-times-circle').forEach((icono) => {
        icono.classList.remove('fa-times-circle');
    });
}


function validarGenero(){
    let seleccionarGenero=document.getElementById('genero');
    if(seleccionarGenero.value==0 || seleccionarGenero.value==''){
        alert('Seleccione una opcion para continuar')
        seleccionarGenero.focus();
    }else alert('Opcion seleccionada con exito');
    seleccionarGenero.focus()
  }


  const apiUrl = 'https://restcountries.com/v3/all';


  async function getCountries(){
      try {
          const response = await fetch(apiUrl);
          
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const countries = await response.json();
  
          const countryNames = countries.map(country => country.name.common);
          
          const selectElement = document.getElementById('country');
        //   console.log('country')
          
          countryNames.forEach(name => {
              countryNames.sort()
              const option = document.createElement('option');
              option.value = name;
              option.textContent = name;
              selectElement.appendChild(option);
          });
      } catch (error) {
          console.error(`Error: ${error.message}`);
      }
  }
  
  
  getCountries()
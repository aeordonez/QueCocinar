const formulario = document.getElementById('formulario');
// accedo al formulario
const inputs = document.querySelectorAll('#formulario input');
// almaceno todos los input del formulario

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    // password: /^.{4,12}$/,
    telefono: /^[09][0-9]{6,9}$/
}

const campos = {
    nombre: false,
    apellido: false,
    // password: false,
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
        // case "password":
        //     validarCampo(expresiones.password, e.target, 'password');
        //     validarPassword2()
        //     break;
        // case "password2":
        //     validarPassword2()
        //     break;
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

// const validarPassword2 = () => {
//     const inputPassword1 = document.getElementById('password');
//     const inputPassword2 = document.getElementById('password2');

//     if(inputPassword1.value !== inputPassword2.value){
//         document.getElementById(`password2`).classList.add('grupo-incorrecto');
//         document.getElementById(`password2`).classList.remove('grupo-correcto');
//         document.querySelector(`#password2 i`).classList.add('fa-times-circle');
//         document.querySelector(`#password2 i`).classList.remove('fa-check-circle');
//         document.querySelector(`#password2.input-error`).classList.add('input-error-activo');
//         campos['password'] = false;
//     }else{
//         document.getElementById(`password2`).classList.remove('grupo-incorrecto');
//         document.getElementById(`password2`).classList.add('grupo-correcto');
//         document.querySelector(`#password2 i`).classList.remove('fa-times-circle');
//         document.querySelector(`#password2 i`).classList.add('fa-check-circle');
//         document.querySelector(`#password2.input-error`).classList.remove('input-error-activo')
//         campos['password'] = true;
//     }
// }

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
// accedo a cada input y x cada input ejecute un codigo

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // prevengo que se ejecute el boton enviar y envie datos  ante un evento

    const terminos = document.getElementById('terminos')
    if (campos.nombre && campos.apellido && campos.correo
        // && campos.password
        && campos.telefono
        && terminos.checked
    ) {
        formulario.reset();
        document.getElementById('mensaje-exitoso').classList.add('mensaje-exitoso-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exitoso').classList.remove('mensaje-exitoso-activo');
        }, 5000);

        document.querySelectorAll('.grupo-correcto').forEach((icono) => {
            icono.classList.remove('grupo-correcto');
        })
    }
    else {
        document.getElementById('mensaje').classList.add('mensaje-activo');

     

    }
})

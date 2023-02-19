//const formulario = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input');

function validateForm(){
    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let clave = document.getElementById('clave').value
    let confClave = document.getElementById('conf-clave').value

    let validacion = true

    if (nombre === '') {
        console.log('Campo vacio nombre')
        let nombreClase = document.getElementById('nombre')
        nombreClase.className = 'formulario_inputError'
        let textoError = document.getElementById('fraseErrorNombre') 
        textoError.hidden = false
        validacion = false
        //document.getElementById('nombre').classList.add('formulario_grupo-incorrecto')
    }else{
        let nombreClase = document.getElementById('nombre')
        nombreClase.className = 'formulario_inputOk'
        let textoError = document.getElementById('fraseErrorNombre') 
        textoError.hidden = true
        validacion = true
    }

    //if else de la trada de nombre sin caacteres numericos
    if(nombre != /^[a-zA-ZÀ-ÿ]$/){
        let nombreCorrectoClase = document.getElementById('nombreIncorrecto')
        nombreCorrectoClase.hidden = false
        validacion = false
    }else{
        let nombreCorrectoClase = document.getElementById('nombreIncorrecto')
        nombreCorrectoClase.hidden = true
        validacion = true
    }

    if (email === '') {
        let emailClase = document.getElementById('email')
        emailClase.className = 'formulario_inputError'
        let textoError = document.getElementById('fraseErrorEmail') 
        textoError.hidden = false
        validacion = false
    }else{
        let emailClase = document.getElementById('email')
        emailClase.className = 'formulario_inputOk'
        let textoError = document.getElementById('fraseErrorEmail') 
        textoError.hidden = true
        validacion = true
    }

    if (email != /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) {
        let emailCorrectoClase = document.getElementById('emailInvalido')
        emailInvalido.hidden = false
        validacion = false
    }else{
        let emailCorrectoClase = document.getElementById('emailInvaido') 
        emailInvalido.hidden = true
        validacion = true
    }

    if (clave === '') {
        let claveClase = document.getElementById('clave')
        claveClase.className = 'formulario_inputError'
        let textoError = document.getElementById('fraseErrorClave') 
        textoError.hidden = false
        validacion = false
    }else{
        let claveClase = document.getElementById('clave')
        claveClase.className = 'formulario_inputOk'
        let textoError = document.getElementById('fraseErrorClave') 
        textoError.hidden = true
        validacion = true
    }

    if (confClave === '') {
        let confClaveClase = document.getElementById('conf-clave')
        confClaveClase.className = 'formulario_inputError'
        let textoError = document.getElementById('fraseErrorConfClave') 
        textoError.hidden = false
        validacion = false
    }else{
        let confClaveClase = document.getElementById('conf-clave')
        confClaveClase.className = 'formulario_inputOk'
        let textoError = document.getElementById('fraseErrorConfClave') 
        textoError.hidden = true
        validacion = true
    
    }

    if(clave === '' || clave != confClave){
        let clavesDiferentes = document.getElementById('clavesDiferentes')
        clavesDiferentes.hidden = false
        validacion = false
    }else{
        let clavesDiferentes = document.getElementById('clavesDiferentes')
        clavesDiferentes.hidden = true
        validacion = true
    }

    if(validacion){
        alert("Su inscripción se ha realizado correctamente.")
    }


    return validacion
}

/*
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ]$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	clave: /^.{1,8}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                

            } else {
                document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto');
            }
        
        break;
        case "email":
        
        break;
        case "clave":
        
        break;
        case "conf-clave":
        
        break;
        

    }

};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
        
    });

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});
*/
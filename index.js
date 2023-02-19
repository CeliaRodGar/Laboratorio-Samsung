
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
        let iconoBienNombre = document.getElementById('estado-bien')
        iconoBienNombre.hidden = false
        let iconoMalNombre = document.getElementById('estado-mal')
        iconoMalNombre.hidden = true

    }else{
        let nombreClase = document.getElementById('nombre')
        nombreClase.className = 'formulario_inputOk'
        let textoError = document.getElementById('fraseErrorNombre') 
        textoError.hidden = true
        validacion = true
        let iconoBienNombre = document.getElementById('estado-bien')
        iconoBienNombre.hidden = true
        let iconoMalNombre = document.getElementById('estado-mal')
        iconoMalNombre.hidden = false
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

$(document).ready(function () {
    $('#stock').DataTable();
});

//Empezaremos definiendo las variables.
var nombre = document.getElementById('nombreUsuario');
var correo = document.getElementById('emailAddress');
var texto = document.getElementById('comentary');
//Se declara una constante al formulario.
const form = document.getElementById("form");
//Agregamos un evento 'Listener' al formulario, para esperar que ocurra el evento SUBMIT, e intento enviar información.
form.addEventListener("submit", e=>{
//Es para evitar que el evento continue con su comportamiento por defecto.
    e.preventDefault()
//Estamos verificando que el campo de nombre no esté vacío.
    if (nombre.value == ""){
        //generamos la alerta para que se ingrese texto al campo
        alert("Ingrese su nombre el campo no puede estar vacío")

    }
    //Estamos verificando que el contenido de nombre sean sólo letras y no números.
    else if ( !( /^[a-zA-Z ]+$/.test(nombre.value) ) ){
        //generamos la alerta para que sean ingresadas sólo letras.
	alert("Sólo deben ser letras, no aceptaremos números");
    }
        //generamos la alerta para que se ingrese un nombre completo
    else if (nombre.value.length < 8 ){
	alert("Debe ingresar su nombre completo");
    }
    //Estamos verificando que el campo de correo electrónico no se encuentre vacío.
    if ( correo.value == ""){
        //generamos la alerta para que sea ingresado un correo electrónico.
        alert("Ingrese su correo, no puede enviar campo vacío")

    }
    
    else if ( correo.value.length < 4){
        //generamos la alerta para que sea un correo válido.
	alert("El correo es demasiado corto");
    }
    //Estamos verificando que el campo comentario no se encuentre vacío.
    if (texto.value == ""){
        alert("Debes enviar formulario con su comentario")
        //generamos la alerta para que sea comentado el formulario.

    }
    


})


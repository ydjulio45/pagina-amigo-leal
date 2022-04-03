//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

































    function regis(){


var identificacion, name1, apellido, email, contraseña;

var identificacion = document.getElementById("identificacion").value;
var name1 = document.getElementById("name1").value;
var apellido = document.getElementById("apellido").value;
var email = document.getElementById("email").value;
var contraseña = document.getElementById("contraseña").value;




expresion1= /\w+@\w+\.+[a-z]/;/*expresiones regulares*//*texto123@gmail.com*/
    expresion2= /^\d{7,10}$/; /*expresiones regulares*/


if(identificacion == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir tu identificacion!'
});
        return false;
    }
    if(!expresion2.test(identificacion)){
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes tu identificacion debe tener 10 numeros!'
})
    return false;
  }
  if(name1 == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un nombre!'
});
        return false;
    }
    if(name1 < 3){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'tu nombre es muy corto!'
});
        return false;
    }
    if(apellido == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un apellido!'
});
       return false;
    }
      
 if(apellido < 3 ){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'tu apellido es muy corto!'
});
        return false;
    }

if(email == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un email!'
});
        return false;
    }


if(!expresion1.test(email)){
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un correo electronico valido, debe contener "@"!'
})
    return false;
  }
if(contraseña == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir una contraseña!'
});
        return false;
    }

if(contraseña > 5){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'su contraseña es muy corta y poco segura!'
});
        return false;
    }




    }
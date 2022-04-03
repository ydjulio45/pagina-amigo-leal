
function validar(){
    var name, phone, email, mensaje;

    /*Devuelve una referencia al elemento por su ID.*/
    var name = document.getElementById("name").value;
     var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
       var mensaje = document.getElementById("mensaje").value;
    expresion1= /\w+@\w+\.+[a-z]/;/*expresiones regulares*//*texto123@gmail.com*/
    expresion2= /^\d{7,10}$/; /*expresiones regulares*/
    
//nombre
    if(name == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un nombre!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }
    if(name.length>10){
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Tu nombre es muy largo!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }
    if(name.length<2){
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Tu nombre es muy corto!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }



//telefono
    if(phone == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un numero!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }

    if(!expresion2.test(phone)){
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un numero valido. un numero de 7 o 10 digitos!',
  footer: '<a href="">Why do I have this issue?</a>'
})
        return false;
    }
    
    //correo
    if(email == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un correo electronico!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }
    if(!expresion1.test(email)){
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un correo electronico valido. debe contener "@"!',
  footer: '<a href="">Why do I have this issue?</a>'
})
        return false;
    }
    //mensaje
    if(mensaje == 0){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes escribir un mensaje!',
  footer: '<a href="">Why do I have this issue?</a>'
});
        return false;
    }

}


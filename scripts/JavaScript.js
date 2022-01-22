function iniciar(){
  registro=document.getElementById("registro");
  password1=document.getElementById("password1");
  password2=document.getElementById("password2");
  password1.addEventListener("input", validacion, false);
  password2.addEventListener("input", validacion, false);

}

function validacion(){
      if(password1.value!==password2.value)
            password2.setCustomValidity('Las password deben coincidir');
      else
            password2.setCustomValidity('');
}
window.addEventListener("load", iniciar, false);

/*Para las fechas de inicio*/

fechaInicio=document.getElementById("fechaInicio");
fechaActual = new Date();
fechaIni = fechaInicio.valueAsDate;

function iniciar(){
  registro=document.getElementById("registro");
  registroSubmint=document.getElementById("registro-submit");
  registroSubmint.addEventListener("click", enviar, false);

}

function enviar(){
  if(registro.checkValidity()){
          registro.submit();

}

}
window.addEventListener("load", iniciar, false);

/*Para validar entradas en tiempo real*/

function validarEntrada(evento){
  var elemto = evento.target;
  if (elemto.validity.valid)
        elemento.style.background = "transparent";
  else
        elemto.style.background = "yellow";

}

function iniciar(){
  registro=document.getElemntById("registro");
  registro.addEventListener("input", validarEntrada, false);
}
window.addEventListener("load", iniciar, false);

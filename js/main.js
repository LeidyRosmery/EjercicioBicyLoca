var elementoClase=document.getElementsByClassName("form-control");
var elementoSpan=document.getElementsByTagName("span");
var opcion=document.getElementById("opcion");
var remember=document.getElementById("recordarme")
var expresion =  /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
var correoExpresion=/\w+@\w+\.+[com]/ ;

function validateForm(){
  if(elementoClase[0].value=="" && elementoClase[1].value=="" && elementoClase[2].value=="" && elementoClase[3].value==""){
    alert(" INGRESE LOS VALORES SOLICITADOS EN EL FORMULARIO ");
  }
  if(elementoClase[0].value=="" || elementoClase[1].value=="" || elementoClase[2].value=="" || elementoClase[3].value==""  ){
    camposVacios();
  }
  if(elementoClase[0].value!=="" &&  elementoClase[1].value!=="" && elementoClase[2].value!=="" && elementoClase[3].value!==""  ){
    camposVacios();
    validaCampos();
    }

}
function camposVacios(){
  for(var i=0 ; i<4 ; i++){
    if(elementoClase[i].value == "" ){
      elementoSpan[i].innerHTML= " <strong> *  Este campo es Obligatorio </strong>";
    }else{
      elementoSpan[i].innerHTML= "";
    }
  }
}
function limpiarInput(){
  for(var i=0 ; i<4 ; i++){
  elementoClase[i].value="";
  opcion.value=""; }
}
function validaCampos(){
  if(!expresion.test(elementoClase[0].value)){
    alert(" INGRESE UN NOMBRE VALIDO");
  }
  else if(!expresion.test(elementoClase[1].value)) {
    alert("INGRESE UN APELLIDO VALIDO");
  }
  else if (!correoExpresion.test(elementoClase[2].value)){
    alert("INGRESE UN CORREO VALIDO");
  }
  else if (elementoClase[3].value.length < 6){
    alert("LA CONTRASENIA INGRESADA ES DEMASIADO CORTA");
  }
  else if (elementoClase[3].value === "password"|| elementoClase[3].value ==="123456" || elementoClase[3].value==="987654"){
    alert("INGRESE UNA CONTRASENIA DIFERENTE ");
  }
  else if (opcion.value=="0") {
    alert("ELIJA UNA DE LAS OPCIONES DE TIPO BICICLETAS");
  } else {
    alert("GRACIAS : SUS DATOS FUERON REGISTRADOS EXITOSAMENTE");
    limpiarInput();
  }
}

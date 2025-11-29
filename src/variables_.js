const buttonform = document.getElementById("buttonform");
const datatype = document.getElementById("datatype");
const buttoncheck = document.getElementById("buttoncheck");
const datatype_practice = document.getElementById("datatype_practice");
const resultadocomparador = document.getElementById("resultadocomparador");
const comparadorform = document.getElementById("comparadorform");


buttonform.addEventListener("click", function (even) {
    even.preventDefault();
    let tipo1 = 'Hola';
    let tipo2 = 2003;
    let tipo3 = true;

    datatype.innerHTML = `El tipo1 es: <b>${typeof tipo1}</b><br> 
                El tipo2 es: <b>${typeof tipo2}</b><br> 
                El tipo3 es: <b>${typeof tipo3}</b><br>`;
});

buttoncheck.addEventListener("click", function (even) {
    even.preventDefault();
    const dato1_value = document.getElementById("dato1").value;
    const dato2_value = document.getElementById("dato2").value;
    const dato3_value = document.getElementById("dato3").value;
    let dato1, dato1_tipo;
    let dato2, dato2_tipo;
    let dato3, dato3_tipo;
    if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
        dato1 = Number(dato1_value);
        dato1_tipo = typeof dato1;

    }
    else {
          dato1 = dato1_value;
        dato1_tipo = typeof dato1;
    }
    if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
        dato2 = Number(dato2_value);
        dato2_tipo = typeof dato2;
    }
    else {
        dato2 = dato2_value;
        dato2_tipo = typeof dato2;
    }

    if (!isNaN(dato1_value) && dato1_value.trim() !== "" && isNaN(dato2_value) && dato2_value.trim() != "") {
        dato3 = Number(dato3_value);
        dato3_tipo= typeof dato3;
    }
    else {
        dato3 = dato3_value;
        dato3_tipo = typeof dato3;
    }
    datatype_practice.innerHTML = `El dato 1 es: <b>${dato1_tipo}</b><br> 
                El dato 2 es: <b>${dato2_tipo}</b><br> 
                El dato 3 es: <b>${dato3_tipo}</b><br>`;
});

function sumar(){
num1 = parseInt(document.getElementById("num1").value);
num2 = parseInt(document.getElementById("num2").value);
result= num1 + num2;
document.getElementById("result").value=result;

}
function restar(){
num1 = parseInt(document.getElementById("num1").value);
num2 = parseInt(document.getElementById("num2").value);
result= num1-num2;
document.getElementById("result").value=result;

}
function multiplicar(){
num1 = parseInt(document.getElementById("num1").value);
num2 = parseInt(document.getElementById("num2").value);
result= num1*num2;
document.getElementById("result").value=result;

}
function dividir(){
num1 = parseInt(document.getElementById("num1").value);
num2 = parseInt(document.getElementById("num2").value);
result= num1/num2;
document.getElementById("result").value=result;
if(num1 == 0 || num2 ==0){
 document.getElementById("result").value="Error";
}

}

comparadorform.addEventListener("submit", function (even) {
    even.preventDefault();
   let mensaje="";
comp1=document.getElementById("comp1").value;
comp2=document.getElementById("comp2").value;
//compración de valor 
  if(comp1 == comp2){
    mensaje+= "<p> Los valores son iguales</p>";
  }
  else
  {
    mensaje+="<p> Los valores no son iguales</p>";
  }
  //compración estricta 
  if(comp1 === comp2){
    mensaje+= "<p> Los valores son estrictamente iguales</p>";
  }
  else
  {
    mensaje+="<p> Los valores no son estrictamente iguales</p>";
  }
  //comparación mayor que, menor que 
    if(comp1 > comp2){
    mensaje+= "<p> El valor de comp1 es mayor que comp2</p>";
  }
  else
  {
    mensaje+="<p> El valor de comp1 es menor que comp2 </p>";
  }
   comparadorform.innerHTML = mensaje;
});
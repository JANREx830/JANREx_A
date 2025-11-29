formulario = document.getElementById("formulario");
formulario.addEventListener("submit", actionformulario);
function actionformulario(even)
{
even.preventDefault();
alert("Se contactaran con usted pronto")
console.log("Estoy en mi action formulario");
formulario.reset();
}

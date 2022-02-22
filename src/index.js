import validator from './validator.js';

const formulario = document.querySelector('#formulario-tarjeta');
//INPUT NUMBER GENERAL VALIDATION --------------------------
formulario.inputNumero.addEventListener('keyup', (e)=>
{
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
  // Eliminamos espacios en blanco
  .replace(/\s/g, '')
  // Eliminar las letras
  .replace(/\D/g, '')
  // Espacio cada 4 numeros
  .replace(/([0-9]{4})/g, '$1 ')
  // Elimina el ultimo especio
  .trim();
})
// NAME VALIDATION ----------------------------------------------------
formulario.inputNombre.addEventListener('keyup', (e)=>
{
  let valorName = e.target.value;
  formulario.inputNombre.value = valorName.replace(/\d/g, '').toUpperCase();  //  permite solo números y letras mayúsculas
})
// CALL FUNCTIONS WHEN PRESS BOTTON ----------------------------------------------------
const btnValid = document.querySelector('#validar');
btnValid.addEventListener("click", (e) =>
{
  document.getElementById("fillInputs").innerHTML = "";

  const num = document.getElementById("inputNumero").value;
  const name = document.getElementById("inputNombre").value;
  if((num == "") || (name == "")){
    e.preventDefault();
    document.getElementById("fillInputs").innerHTML = "Llena el campo que falta";
  }
  else{

  const num = document.getElementById("inputNumero").value;

  const num1 = num.replace(/\s/g, ''); // Eliminamos espacios en blanco

  //maskify
 const maskNumber = validator.maskify(num1);

 //isvalid
 const isvalidNumber = validator.isValid(num1);

 if(isvalidNumber==true){
  document.getElementById("numHided").innerHTML = "El número de tarjeta " + maskNumber + " es válido.";
  document.getElementById("formulario-tarjeta").style.display = 'none';
  document.getElementById("formulario-tarjeta2").style.display = 'block';
  document.getElementById("numHided2").innerHTML = "El número de tarjeta " + maskNumber + " es válido.";
 }
 else{
  document.getElementById("numHided").innerHTML = "El número de tarjeta " + maskNumber + " es inválido.";
  document.getElementById("inputNumero").value = "";
 }
}
});

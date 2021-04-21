/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let formu = document.getElementById("formulario");

formu.addEventListener("submit", function(event) {
  event.preventDefault(); //prevengo las acciones por defecto

  //INPUT CARD
  let card = document.getElementById("card");
  validarCamposVacios(card);

  //INPUT CVC
  let CVC = document.getElementById("cvc");
  validarCamposVacios(cvc);

  //INPUT AMOUNT
  let amount = document.getElementById("amount");
  validarCamposVacios(amount);

  //INPUT FIRST NAME
  let firstname = document.getElementById("firstname");
  validarCamposVacios(firstname);

  //INPUT LASTNAME
  let lastname = document.getElementById("lastname");
  validarCamposVacios(lastname);

  //INPUT CITY
  let city = document.getElementById("city");
  validarCamposVacios(city);

  //INPUT POSTAL CODE
  let postal = document.getElementById("postal");
  validarCamposVacios(postal);

  //INPUT MESSAGE
  let message = document.getElementById("message");
  validarCamposVacios(message);
});

function validarCamposVacios(campo) {
  //traigo la alerta
  let alerta = document.getElementById("alert");

  if (validator.isEmpty(campo.value)) {
    alerta.style.display = "block";
    campo.style.backgroundColor = "#f8d7da";
  } else {
    alerta.style.display = "none";
    campo.style.backgroundColor = "white";
    campo.value = "";
  }
}

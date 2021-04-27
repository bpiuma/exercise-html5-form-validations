import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//obtengo los elementos del DOM
let form = document.getElementById("form");
let alerta = document.querySelector(".alert");
let card = document.getElementById("inputCard");
let cvc = document.getElementById("inputCVC");
let amount = document.getElementById("inputAmount");
let firstName = document.getElementById("inputFirstName");
let lastName = document.getElementById("inputLastName");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");
let postalCode = document.getElementById("inputPostalCode");
let message = document.getElementById("inputMessage");

//agrego la accion para el boton send
form.addEventListener("submit", function(event) {
  //prevengo la acción por defecto
  event.preventDefault();

  //valido si los inputs estan vacios
  validarVacio(card);
  validarVacio(cvc);
  validarVacio(amount);
  validarVacio(firstName);
  validarVacio(lastName);
  validarVacio(city);
  validarEstado(state);
  validarVacio(postalCode);
  validarVacio(message);

  //validacion de campo vacio
  function validarVacio(campo) {
    //muestro la alerta y aplico el estilo, segun corresponda
    if (validator.isEmpty(campo.value)) {
      alerta.style.display = "block";
      campo.style.backgroundColor = "pink";
    } else {
      alerta.style.display = "none";
      campo.style.backgroundColor = "white";
    }
  }

  //validacion exclusiva para State
  function validarEstado(campo) {
    //muestro la alerta y aplico el estilo
    if (validator.equals(campo.value, "Pick a state")) {
      alerta.style.display = "block";
      campo.style.backgroundColor = "pink";
    } else {
      alerta.style.display = "none";
      campo.style.backgroundColor = "white";
    }
  }
});

//agrego la accion para el boton cancel
form.addEventListener("reset", function(event) {
  //prevengo la acción por defecto
  event.preventDefault();

  resetear(card);
  resetear(cvc);
  resetear(amount);
  resetear(firstName);
  resetear(lastName);
  resetear(city);
  resetearEstado(state);
  resetear(postalCode);
  resetear(message);

  function resetear(campo) {
    alerta.style.display = "none";
    campo.style.backgroundColor = "white";
    campo.value = "";
  }

  function resetearEstado(campo) {
    alerta.style.display = "none";
    campo.style.backgroundColor = "white";
    campo.value = "Pick a state";
  }
});

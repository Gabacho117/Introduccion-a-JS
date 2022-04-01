//alert("Hola Mundo!!");

//console.log("Este es otro mensaje prro");

var nombre = "Gabacho";
let edad = 10;
//edad = "No quiero decirte prro ";
let titulo = document.getElementById("titulo");

let mensaje = "Mi nombre es " + nombre+" y mi edad es " + (edad+12);

console.log(mensaje);

titulo.innerHTML = mensaje;
titulo.style.color = "#000086";
titulo.style.textTransform = "uppercase";

titulo.onclick = function(){
    titulo.innerHTML = "Le diste click prro lo vas a romper";
    titulo.style.textTransform = "lowercase";
};
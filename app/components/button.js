export default class boton {
    constructor(clase, texto, tipo, color) {
        this.clase = clase;
        this.texto = texto;
        this.tipo = tipo;
        this.color = color;
    }
}

var newBoton = new boton();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", crearBoton);

let mySpan = document.getElementById("mySpan");

function crearBoton() {
    mySpan.innerHTML = "";
    newBoton.clase = document.getElementById("inputClase").value;
    newBoton.texto = document.getElementById("inputTexto").value;
    newBoton.tipo = document.getElementById("inputTipo").value;
    newBoton.color = document.getElementById("inputColor").value;
    alert(`Objeto: Botón \n\n Clase: ${newBoton.clase} \n Texto: ${newBoton.texto} \n Tipo: ${newBoton.tipo} \n Color: ${newBoton.color} `)
    let userInput = JSON.stringify(newBoton);
    mySpan.innerHTML = userInput;
}
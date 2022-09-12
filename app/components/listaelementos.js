export default class listaElem {
    constructor(id, name, status, species) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
    }
}

var newLE = new listaElem();

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", crearLE);

let span4 = document.getElementById("span4");

function crearLE() {
    mySpan.innerHTML = "";
    newLE.id = document.getElementById("input41").value;
    newLE.name = document.getElementById("input42").value;
    newLE.status = document.getElementById("input43").value;
    newLE.species = document.getElementById("input44").value;
    alert(`Objeto: Lista de elementos \n\n Id: ${newLE.id} \n Nombre: ${newLE.name} \n Status: ${newLE.status} \n Especie: ${newLE.species} `)
    let userInput = JSON.stringify(newLE);
    span4.innerHTML = userInput;
}
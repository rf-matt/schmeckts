import boton from "./components/button.js";
import video from "./components/video.js";
import audio from "./components/audio.js";
import listaElem from "./components/listaelementos.js";

// app Video
var newVideo = new video();
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", crearVideo);
let span1 = document.getElementById("span1");

function crearVideo() {
    mySpan.innerHTML = "";
    newVideo.titulo = document.getElementById("input11").value;
    newVideo.url = document.getElementById("input12").value;
    newVideo.width = document.getElementById("input13").value;
    newVideo.height = document.getElementById("input14").value;
    // alert(`Objeto: Video \n\n Título: ${newVideo.titulo} \n url: ${newVideo.url} \n Ancho: ${newVideo.width} \n Largo: ${newVideo.height} `)
    let userInput = JSON.stringify(newVideo);
    span1.innerHTML = userInput;
}

// app Audio
var newAudio = new audio();
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", crearAudio);
let span2 = document.getElementById("span2");

function crearAudio() {
    mySpan.innerHTML = "";
    newAudio.titulo = document.getElementById("input21").value;
    newAudio.url = document.getElementById("input22").value;
    newAudio.atributos = document.getElementById("input23").value;
    alert(`Objeto: Audio \n\n Título: ${newAudio.titulo} \n url: ${newAudio.url} \n Atributos: ${newAudio.atributos}`)
    let userInput = JSON.stringify(newAudio);
    span2.innerHTML = userInput;
}

// app Botón
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

//app Lista de elementos
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



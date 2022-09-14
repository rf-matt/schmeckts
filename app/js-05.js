import boton from "./components/button.js";
import video from "./components/video.js";
import audio from "./components/audio.js";
import listaElem from "./components/listaelementos.js";

// app Video
let listaVideos = [];
let newVideo = new video();
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", crearVideo);

function crearVideo(e) {
    e.preventDefault();
    newVideo.titulo = document.getElementById("input11").value;
    newVideo.url = document.getElementById("input12").value;
    newVideo.width = document.getElementById("input13").value;
    newVideo.height = document.getElementById("input14").value;
    newVideo.css_class = document.getElementById("input15").value;
    listaVideos.push(newVideo);
    console.warn('added', {listaVideos});
    let videoRender = document.getElementById("videoRender");
    videoRender.innerHTML += newVideo.render();
}

//app Audio
let listaAudio = [];
let newAudio = new audio();
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", crearAudio);

function crearAudio(e) {
    e.preventDefault();
    newAudio.titulo = document.getElementById("input21").value;
    newAudio.url = document.getElementById("input22").value;
    newAudio.atributos = document.getElementById("input23").value;
    listaAudio.push(newAudio);
    console.warn('added', { listaAudio });
    let audioRender = document.getElementById("audioRender");
    audioRender.innerHTML += newAudio.render();
}

// app Botón
let listaBoton = [];
let newBoton = new boton();
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", crearBoton);
let botonRender = document.getElementById("botonRender");

function crearBoton(e) {
    e.preventDefault();
    newBoton.tipo = document.getElementById("input31").value;
    newBoton.texto = document.getElementById("input32").value;
    newBoton.clase = document.getElementById("input33").value;
    newBoton.size = document.getElementById("input34").value;
    botonRender.innerHTML += newBoton.render();
}

//app Lista de elementos
let listaElementos = [];
let newLE = new listaElem();
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", crearLE);
let leRender = document.getElementById("leRender");

function crearLE(e) {
    e.preventDefault();
    newLE.id = document.getElementById("input41").value;
    newLE.name = document.getElementById("input42").value;
    newLE.status = document.getElementById("input43").value;
    newLE.species = document.getElementById("input44").value;
    leRender.innerHTML += newLE.render();
}
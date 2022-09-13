import boton from "./components/button.js";
import video from "./components/video05.js";
import audio from "./components/audio.js";
import listaElem from "./components/listaelementos.js";


// let newVideo = newVideo("https://www.w3schools.com/tags/movie.mp4", 320, 240, "none");
// videoRender.innerHTML += newVideo.videoRender();
// https://www.w3schools.com/tags/movie.mp4

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
    // videoRender.innerText = '\n' + JSON.stringify(listaVideos, '\t', 2);
    videoRender.innerHTML += newVideo.render();
    }



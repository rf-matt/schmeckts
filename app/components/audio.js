export default class audio {
    constructor(titulo, url, bitrate, controls) {
        this.titulo = titulo;
        this.url = url;
        this.bitrate = bitrate;
        this.controls = controls;
    }
}

var newAudio = new audio();

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", crearAudio);

let span2 = document.getElementById("span2");

function crearAudio() {
    mySpan.innerHTML = "";
    newAudio.titulo = document.getElementById("input21").value;
    newAudio.url = document.getElementById("input22").value;
    newAudio.bitrate = document.getElementById("input23").value;
    newAudio.controls = document.getElementById("flexSwitchCheck").value;
    alert(`Objeto: Audio \n\n Título: ${newAudio.titulo} \n url: ${newAudio.url} \n Bitrate: ${newAudio.bitrate} \n Controles: ${newAudio.controls} `)
    let userInput = JSON.stringify(newAudio);
    span2.innerHTML = userInput;
}
export default class video {
    constructor(titulo, url, width, height) {
        this.titulo = titulo;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}

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
    alert(`Objeto: Video \n\n Título: ${newVideo.titulo} \n url: ${newVideo.url} \n Ancho: ${newVideo.width} \n Largo: ${newVideo.height} `)
    let userInput = JSON.stringify(newVideo);
    span1.innerHTML = userInput;
}




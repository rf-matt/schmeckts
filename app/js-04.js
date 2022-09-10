class video {
    constructor(titulo, tituloAbr, url, maxRes, es4K) {
        this.titulo = titulo;
        this.tituloAbr = tituloAbr;
        this.url = url;
        this.maxRes = maxRes;
        this.es4K = es4K;
    }
}

class audio {
    constructor(titulo, url, calidad) {
        this.titulo = titulo;
        this.url = url;
        this.calidad = calidad;
    }
}

class boton {
    constructor(clase, texto, tipo, color) {
        this.clase = clase;
        this.texto = texto;
        this.tipo = tipo;
        this.color = color;
    }
}

class listaElem {
    constructor(id, name, status, species) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
    }
}


var newBoton = new boton();

let enviarBoton = document.getElementById("enviarBoton");
enviarBoton.addEventListener("click", crearBoton);

function crearBoton() {
    newBoton.clase = document.getElementById("inputClase").value;
    newBoton.texto = document.getElementById("inputTexto").value;
    newBoton.tipo = document.getElementById("inputTipo").value;
    newBoton.color = document.getElementById("inputColor").value;
    alert(`Objeto: Botón \n\n Clase: ${newBoton.clase} \n Valor: ${newBoton.texto} \n Tipo: ${newBoton.tipo} \n Color: ${newBoton.color} `)
    // let mySpan = document.getElementById("mySpan");
    // document.getElementById("mySpan").innerHTML = newBoton.clase; 
}




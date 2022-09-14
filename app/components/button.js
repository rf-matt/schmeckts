export default class boton {
    constructor(clase, texto, tipo, size) {
        this.clase = clase;
        this.texto = texto;
        this.tipo = tipo;
        this.size = size;
    }
    render(){
        let myRend = `<br><button type=${this.tipo}
     class="${this.clase} ${this.size}">
     ${this.texto}</button><br>`
return myRend;
}

}
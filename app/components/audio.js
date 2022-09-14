export default class audio {
    constructor(titulo, url, atributos) {
        this.titulo = titulo;
        this.url = url;
        this.atributos = atributos;
    }
    render() {
        let myRend =   `<div class="card" style="width: 18rem">
                            <h5 class="card-title">${this.titulo}</h5>
                                <audio controls ${this.atributos}>
                                    <source src=${this.url} type="audio/mpeg">
                                </audio>
                        </div>`
        return myRend;
    }
}
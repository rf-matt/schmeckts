export default class video {
    constructor(titulo, url, width, height, css_class) {
        this.titulo = titulo;
        this.url = url;
        this.width = width;
        this.height = height;
        this.css_class = css_class;
    }
    render() {
        let myRend =    `<br><div class="card" style="width: 18rem">
                        <h5 class="card-title">${this.titulo}</h5>
                        <video height=${this.height} width=${this.width} ${this.css_class}>
                        <source src=${this.url} type"video/mp4">
                        </video></div>`
        return myRend;
    }

}






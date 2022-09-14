export default class listaElem {
    constructor(id, name, status, species) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
    }
    render() {
        let myRend = `<div class="card" style="width: 18rem">
                      <span>ID: ${this.id}</span>
                      <span>Nombre: ${this.name}</span>
                      <span>Estado: ${this.status}</span>
                      <span>Especie: ${this.species}</span>
                      </div></br>`
        return myRend;
    }

}


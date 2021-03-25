export class Serie {
    constructor(nombre, personajes = []) {
        this.nombre = nombre;
        this.personajes = personajes;
    }

    agregarPersonajes(personaje) {
        this.personajes.push(personaje);
    }

    getPersonajes() {
        // aqui tiene que ir el código que recorre el array this.personajes
        // e imprime en pantalla las cards con la informacion
        const contenedorCards = document.getElementById('resultados');

        const renderizarCard = (personaje) => {
            return `<div class="col-md-4 mb-3"><div class="card">
            <img src="${personaje.obtenerImagen()}" class="card-img-top" alt="${personaje.obtenerNombre()}">
            <div class="card-body">
              <h5 class="card-title">${personaje.obtenerNombre()}</h5>
              <p class="card-text">Especie: ${personaje.obtenerEspecie()}</p>
              <a href="#" class="btn btn-primary">Ver personaje</a>
            </div>
          </div>
          </div>`;
        }

        contenedorCards.innerHTML = this.personajes.map((personaje) => renderizarCard(personaje)).join('');
    }
}
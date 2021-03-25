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
    const contenedorCards = document.getElementById("resultados");

    const renderizarCard = (personaje) => {
      return `<div class="col-md-4 col-lg-3 mb-3"><div class="card">
            <img src="${personaje.obtenerImagen()}" class="card-img-top" alt="${personaje.obtenerNombre()}">
            <div class="card-body">
              <h5 class="card-title">${personaje.obtenerNombre()}</h5>
              <p class="card-text">Especie: ${personaje.obtenerEspecie()}</p>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${personaje.obtenerId()}">
                Ver personaje
              </button>
            </div>
          </div>
          </div>`;
    };

    contenedorCards.innerHTML = this.personajes
      .map((personaje) => renderizarCard(personaje))
      .join("");
  }

  crearModales() {
    const contenedorModals = document.getElementById("contenedorModals");
    const renderizarModals = (personaje) => {
      return `<div id="modal-${personaje.obtenerId()}" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloModal" class="modal-title">${personaje.obtenerNombre()}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="cuerpoModal" class="modal-body">
                        <ul>
                            <li>Especie: ${personaje.obtenerEspecie()}</li>
                            <li>Género: ${personaje.obtenerGenero()}</li>
                            <li>Orígen: ${personaje.obtenerOrigen()}</li>
                            <li>Locación: ${personaje.obtenerLocacion()}</li>
                            <li>Estado: ${personaje.obtenerEstado()}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>`;
    };
    contenedorModals.innerHTML = this.personajes.map((personaje) => renderizarModals(personaje)).join("");
  }
}

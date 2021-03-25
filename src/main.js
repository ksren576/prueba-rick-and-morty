import { Serie } from './serie';
import { Personaje } from './personaje';


const modulo = (() => {
    const urlBase = 'https://rickandmortyapi.com/api';
    let cantidadPersonajes = null;

    const obtenerDatosAPI = async (url) => {
        try {
            const rawData = await fetch(url);
            const data = await rawData.json();
            return data.results;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        obtenerDatos: async () => {
            const instanciaSerie = new Serie("Rick and Morty");
            const personajes = await obtenerDatosAPI(urlBase + '/character');
            cantidadPersonajes = personajes.length;
            personajes.forEach((personaje) => {
                const instanciaPersonaje = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
                instanciaSerie.agregarPersonajes(instanciaPersonaje);
            });
            instanciaSerie.getPersonajes();
        },
        cargarCantidadDePersonajes: () => {
            const elementoCantidadPersonajes = document.getElementById('cantidadPersonajes');
            const elementoSpinner = document.getElementById('spinner');

            elementoCantidadPersonajes.innerText = cantidadPersonajes;
            elementoSpinner.remove();
        },
    };
})();

modulo.obtenerDatos();

setTimeout(modulo.cargarCantidadDePersonajes, 2000);
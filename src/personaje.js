export class Personaje {
    constructor(id, nombre, especie, imagen, genero, origen, locacion, estado) {
        this.obtenerId = function() {
            let _id = id;
            function _getId() {
                return _id;
            }
            return _getId();
        }
        this.obtenerNombre = function() {
            let _nombre = nombre;
            function _getNombre() {
                return _nombre;
            }
            return _getNombre();
        }
        this.obtenerImagen = function () {
            let _imagen = imagen;
            function _getImagen() {
                return _imagen;
            }
            return _getImagen();
        }
        this.obtenerEspecie = function () {
            let _especie = especie;
            function _getEspecie() {
                return _especie;
            }
            return _getEspecie();
        }
        this.obtenerGenero = function () {
            let _genero = genero;
            function _getGenero() {
                return _genero;
            }
            return _getGenero();
        }
        this.obtenerOrigen = function () {
            let _origen = origen;
            function _getOrigen() {
                return _origen;
            }
            return _getOrigen();
        }
        this.obtenerLocacion = function () {
            let _locacion = locacion;
            function _getLocacion() {
                return _locacion;
            }
            return _getLocacion();
        }
        this.obtenerEstado = function () {
            let _estado = estado;
            function _getEstado() {
                return _estado;
            }
            return _getEstado();
        }
    }
}
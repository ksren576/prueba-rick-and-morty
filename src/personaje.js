export class Personaje {
    constructor(id, nombre, especie, imagen) {
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
    }
}
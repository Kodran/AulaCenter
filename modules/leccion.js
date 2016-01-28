var Leccion = function (nombre, anexos) {  
  this.nombre = nombre;
  this.anexos = [].concat(anexos);
}

var anexo = require("./anexo");
Leccion.prototype = new anexo.Anexo();

Leccion.prototype.getNombre = function() {
  return this.nombre;
};

Leccion.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};

Leccion.prototype.getAnexos = function(nombre) {
  return this.anexos;
};

Leccion.prototype.constructor = Leccion;

exports.Leccion = Leccion;